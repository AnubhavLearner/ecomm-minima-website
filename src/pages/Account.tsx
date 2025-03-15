
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, User as UserIcon } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Account = () => {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-24 md:pt-32 pb-12">
        <div className="container-custom max-w-4xl">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-semibold">My Account</h1>
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h2 className="font-medium">{user?.name}</h2>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-6">
                <p className="text-sm text-muted-foreground">
                  This is a demo account page. In a real application, you would be able to manage your profile, view order history, and update settings.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <Button variant="outline" className="w-full">Order History</Button>
                  <Button variant="outline" className="w-full">Saved Addresses</Button>
                  <Button variant="outline" className="w-full">Payment Methods</Button>
                  <Button variant="outline" className="w-full">Notifications</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Account;
