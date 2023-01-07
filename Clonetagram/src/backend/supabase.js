import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kldsrfxpxdgodskqxdxy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZHNyZnhweGRnb2Rza3F4ZHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE5NzcxNzAsImV4cCI6MTk3NzU1MzE3MH0.czb2ycQOHv0wMHNm2c_i4hvzXeVq7j7Dhw2BpP06wF0'
export const supabase = createClient(supabaseUrl, supabaseKey)
