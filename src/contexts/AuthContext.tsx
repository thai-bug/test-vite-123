import { getUserProfile } from "@/services/auth";
import { IUser } from "@/utils/model";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import React, { createContext } from "react";

interface IContextProps {
  user?: IUser;
  getUser: () => void;
}

export const AuthContext = createContext<IContextProps>({
  user: undefined,
  getUser: () => {},
});

interface IProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: IProps) {
  const getUserQuery = useQuery<IUser>({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
    enabled: !!localStorage.getItem("accessToken"),
  });

  return (
    <AuthContext.Provider
      value={{
        user: getUserQuery.data,
        getUser: getUserQuery.refetch,
      }}
    >
      {getUserQuery.isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spin />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
