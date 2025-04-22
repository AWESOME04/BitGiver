export interface StatCardProps {
    title: string;
    value: string;
    icon: string;
    trend?: number;
    gradientFrom: string;
    gradientTo: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}