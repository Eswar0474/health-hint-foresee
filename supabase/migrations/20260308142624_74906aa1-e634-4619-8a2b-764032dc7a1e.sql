-- Create health_checks table
CREATE TABLE public.health_checks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  symptoms TEXT[] NOT NULL,
  top_result TEXT,
  top_score NUMERIC,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.health_checks ENABLE ROW LEVEL SECURITY;

-- Users can only see their own checks
CREATE POLICY "Users can view own checks" ON public.health_checks
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own checks" ON public.health_checks
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own checks" ON public.health_checks
  FOR DELETE USING (auth.uid() = user_id);

-- Index for fast user lookups
CREATE INDEX idx_health_checks_user_id ON public.health_checks(user_id);
CREATE INDEX idx_health_checks_created_at ON public.health_checks(created_at DESC);