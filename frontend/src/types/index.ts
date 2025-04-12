export interface User {
  id: string;
  username: string;
  email: string;
  userType: 'creator' | 'charity' | 'organization';
  profileImage?: string;
}

export interface NavbarProps {
  isLoggedIn?: boolean;
}

export interface AnimationVariants {
  hidden: object;
  visible: object;
}
