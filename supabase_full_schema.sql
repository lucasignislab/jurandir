-- SCHEMA: public
-- PROJECT: Portal Jurandir - Marido de Aluguel
-- DESIGNED BY: Backend Specialist Agent

-- 1. ENUMS
CREATE TYPE user_type AS ENUM ('PROFESSIONAL', 'CLIENT', 'ADMIN');
CREATE TYPE job_status AS ENUM ('PENDING', 'ACCEPTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');
CREATE TYPE urgency_level AS ENUM ('LOW', 'NORMAL', 'HIGH', 'URGENT');
CREATE TYPE message_type AS ENUM ('TEXT', 'IMAGE', 'LOCATION');
CREATE TYPE subscription_status AS ENUM ('ACTIVE', 'INACTIVE', 'PAST_DUE', 'CANCELLED');
CREATE TYPE plan_type AS ENUM ('BASIC', 'PREMIUM');
CREATE TYPE notification_type AS ENUM ('NEW_JOB', 'JOB_ACCEPTED', 'NEW_MESSAGE', 'SUBSCRIPTION_EXPIRING', 'PAYMENT_RECEIVED', 'REVIEW_RECEIVED');

-- 2. TABLES

-- Users Table (Linked to auth.users)
CREATE TABLE public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    phone TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    type user_type NOT NULL DEFAULT 'CLIENT',
    avatar TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Professionals Table
CREATE TABLE public.professionals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE REFERENCES public.users(id) ON DELETE CASCADE,
    bio TEXT,
    skills TEXT[] DEFAULT '{}',
    experience_years INTEGER DEFAULT 0,
    portfolio TEXT[] DEFAULT '{}',
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zip_code TEXT NOT NULL,
    latitude DOUBLE PRECISION DEFAULT 0,
    longitude DOUBLE PRECISION DEFAULT 0,
    document TEXT UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT false,
    rating DOUBLE PRECISION DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    completed_jobs INTEGER DEFAULT 0
);

-- Clients Table
CREATE TABLE public.clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE REFERENCES public.users(id) ON DELETE CASCADE,
    address TEXT,
    city TEXT,
    state TEXT,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION
);

-- Services Catalog
CREATE TABLE public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    icon TEXT NOT NULL,
    base_price DOUBLE PRECISION
);

-- Jobs / Service Requests
CREATE TABLE public.jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
    professional_id UUID REFERENCES public.professionals(id),
    service_id UUID NOT NULL REFERENCES public.services(id),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    status job_status DEFAULT 'PENDING' NOT NULL,
    urgency urgency_level DEFAULT 'NORMAL' NOT NULL,
    proposed_price DOUBLE PRECISION,
    final_price DOUBLE PRECISION,
    preferred_date TIMESTAMP WITH TIME ZONE,
    scheduled_date TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    commission_paid BOOLEAN DEFAULT false,
    commission_amount DOUBLE PRECISION,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Chats
CREATE TABLE public.chats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID UNIQUE NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
    client_id UUID NOT NULL REFERENCES public.users(id),
    professional_id UUID NOT NULL REFERENCES public.users(id),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Messages
CREATE TABLE public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chat_id UUID NOT NULL REFERENCES public.chats(id) ON DELETE CASCADE,
    sender_id UUID NOT NULL REFERENCES public.users(id),
    content TEXT NOT NULL,
    type message_type DEFAULT 'TEXT' NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Subscriptions
CREATE TABLE public.subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    professional_id UUID NOT NULL UNIQUE REFERENCES public.professionals(id) ON DELETE CASCADE,
    status subscription_status DEFAULT 'INACTIVE' NOT NULL,
    plan_type plan_type DEFAULT 'BASIC' NOT NULL,
    last_payment_date TIMESTAMP WITH TIME ZONE,
    next_payment_date TIMESTAMP WITH TIME ZONE,
    payment_proof TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Reviews
CREATE TABLE public.reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID UNIQUE NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
    reviewer_id UUID NOT NULL REFERENCES public.users(id),
    professional_id UUID NOT NULL REFERENCES public.professionals(id),
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Availabilities
CREATE TABLE public.availabilities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    professional_id UUID NOT NULL REFERENCES public.professionals(id) ON DELETE CASCADE,
    day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
    start_time TEXT NOT NULL,
    end_time TEXT NOT NULL,
    is_available BOOLEAN DEFAULT true
);

-- Notifications
CREATE TABLE public.notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    type notification_type NOT NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    data JSONB,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. ROW LEVEL SECURITY (RLS) policies

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.professionals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.availabilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- USERS: Proprietário pode ler/editar seu próprio perfil
CREATE POLICY "Users can view and update their own profile" ON public.users
    FOR ALL USING (auth.uid() = id);

-- PROFESSIONALS: Público pode ler, proprietário pode editar
CREATE POLICY "Professionals are viewable by everyone" ON public.professionals
    FOR SELECT USING (true);
CREATE POLICY "Professionals can update their own profile" ON public.professionals
    FOR UPDATE USING (auth.uid() = user_id);

-- CLIENTS: Proprietário pode ler/editar
CREATE POLICY "Clients can view and update their own profile" ON public.clients
    FOR ALL USING (auth.uid() = user_id);

-- SERVICES: Todos podem ler, apenas Admin (tipo='ADMIN') pode modificar (Simulado via check de ID se necessário)
CREATE POLICY "Services are viewable by everyone" ON public.services
    FOR SELECT USING (true);

-- JOBS: Cliente e Profissional envolvidos podem ver e atualizar
CREATE POLICY "Jobs viewable by participants" ON public.jobs
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.clients WHERE id = jobs.client_id AND user_id = auth.uid()) OR
        EXISTS (SELECT 1 FROM public.professionals WHERE id = jobs.professional_id AND user_id = auth.uid())
    );
CREATE POLICY "Clients can create jobs" ON public.jobs
    FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM public.clients WHERE id = client_id AND user_id = auth.uid()));

-- CHATS/MESSAGES: Participantes apenas
CREATE POLICY "Participants can view chats" ON public.chats
    FOR SELECT USING (client_id = auth.uid() OR professional_id = auth.uid());
CREATE POLICY "Participants can view and send messages" ON public.messages
    FOR ALL USING (EXISTS (
        SELECT 1 FROM public.chats WHERE id = messages.chat_id AND (client_id = auth.uid() OR professional_id = auth.uid())
    ));

-- NOTIFICATIONS: Apenas destinatário
CREATE POLICY "Users can see their own notifications" ON public.notifications
    FOR ALL USING (user_id = auth.uid());

-- REVIEWS: Público pode ler, apenas cliente do job pode criar
CREATE POLICY "Reviews viewable by everyone" ON public.reviews
    FOR SELECT USING (true);

-- 4. HELPER FUNCTIONS

-- Function to handle updated_at timestamps
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at trigger to relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON public.jobs FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER update_chats_updated_at BEFORE UPDATE ON public.chats FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON public.subscriptions FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
