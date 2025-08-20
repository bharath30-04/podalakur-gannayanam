-- Add admin role for specific user
INSERT INTO public.user_roles (user_id, role)
SELECT 
  au.id,
  'admin'::public.app_role
FROM auth.users au 
WHERE au.email = 'spbharath2005@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;