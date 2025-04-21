export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  userType: 'creator' | 'charity' | 'organization';
  walletAddress?: string; // Make this optional
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

export interface StoredUsers {
  [email: string]: User;
}
