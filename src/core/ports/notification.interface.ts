export interface NotificationService {
    sendEmail(to: string, subject: string, content: string): Promise<void>;
    sendRealTimeNotification(userId: string, message: string): Promise<void>;
  }