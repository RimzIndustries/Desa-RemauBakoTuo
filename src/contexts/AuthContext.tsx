'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { findUserByEmail } from '@/ai/flows/user-flow';

interface User {
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const dbUser = await findUserByEmail(email);

      if (dbUser && dbUser.password === password) {
        const userData = { email: dbUser.email, role: dbUser.role };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        toast({
          title: "Login Berhasil",
          description: "Selamat datang kembali!",
        });
        return true;
      } else {
        toast({
          title: "Login Gagal",
          description: "Email atau password salah!",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login Gagal",
        description: "Terjadi kesalahan pada server.",
        variant: "destructive",
      });
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast({
      title: "Logout Berhasil",
      description: "Anda telah keluar dari sistem!",
    });
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};