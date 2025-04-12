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

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface FundraisingFormData {
  title: string;
  description: string;
  goal: number;
  endDate: string;
  category: 'personal' | 'charity' | 'project';
}

export interface SendFundsData {
  recipient: string;
  amount: number;
  note?: string;
}
