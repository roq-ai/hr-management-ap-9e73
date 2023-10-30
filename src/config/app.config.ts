interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Applicant'],
  tenantRoles: ['Owner', 'HR Manager', 'Administrator', 'Employee'],
  tenantName: 'Team',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Create user profile', 'Read user profile', 'Edit user profile', 'Manage teams'],
  ownerAbilities: ['Manage users', 'Manage teams'],
  getQuoteUrl: 'https://app.roq.ai/proposal/197c8db0-ac42-4bc7-bd28-ba41c989b95d',
};
