/**
 * Centralized Role & Permission Matrix
 * Enforces business permissions across the 8 user roles
 */

export type UserRole =
  | 'SUPER_ADMIN'
  | 'ADMIN'
  | 'PROCUREMENT_OFFICER'
  | 'SALES_OFFICER'
  | 'STOREKEEPER'
  | 'ACCOUNTS_OFFICER'
  | 'TECHNICIAN'
  | 'MANAGEMENT_VIEWER';

export type SystemModule =
  | 'DASHBOARD'
  | 'PRODUCTS'
  | 'IMPORTS'
  | 'STOCK'
  | 'QUOTATIONS'
  | 'SALES'
  | 'PROJECTS'
  | 'PAYMENTS'
  | 'EXPENSES'
  | 'REPORTS'
  | 'SETTINGS';

export interface RolePermissions {
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canApprove: boolean;
  canExport: boolean;
  canPrint: boolean;
  canViewCosts: boolean; // Hide purchase/landed costs from sales & storekeeper
}

const DEFAULT_NO_ACCESS: RolePermissions = {
  canView: false,
  canCreate: false,
  canEdit: false,
  canDelete: false,
  canApprove: false,
  canExport: false,
  canPrint: false,
  canViewCosts: false
};

const FULL_ACCESS: RolePermissions = {
  canView: true,
  canCreate: true,
  canEdit: true,
  canDelete: true,
  canApprove: true,
  canExport: true,
  canPrint: true,
  canViewCosts: true
};

const READ_ONLY_MANAGEMENT: RolePermissions = {
  canView: true,
  canCreate: false,
  canEdit: false,
  canDelete: false,
  canApprove: false,
  canExport: true,
  canPrint: true,
  canViewCosts: true
};

export const ROLE_PERMISSION_MATRIX: Record<UserRole, Record<SystemModule, RolePermissions>> = {
  SUPER_ADMIN: {
    DASHBOARD: FULL_ACCESS,
    PRODUCTS: FULL_ACCESS,
    IMPORTS: FULL_ACCESS,
    STOCK: FULL_ACCESS,
    QUOTATIONS: FULL_ACCESS,
    SALES: FULL_ACCESS,
    PROJECTS: FULL_ACCESS,
    PAYMENTS: FULL_ACCESS,
    EXPENSES: FULL_ACCESS,
    REPORTS: FULL_ACCESS,
    SETTINGS: FULL_ACCESS
  },
  ADMIN: {
    DASHBOARD: FULL_ACCESS,
    PRODUCTS: FULL_ACCESS,
    IMPORTS: FULL_ACCESS,
    STOCK: FULL_ACCESS,
    QUOTATIONS: FULL_ACCESS,
    SALES: FULL_ACCESS,
    PROJECTS: FULL_ACCESS,
    PAYMENTS: FULL_ACCESS,
    EXPENSES: FULL_ACCESS,
    REPORTS: FULL_ACCESS,
    SETTINGS: { ...FULL_ACCESS, canDelete: false }
  },
  PROCUREMENT_OFFICER: {
    DASHBOARD: { ...READ_ONLY_MANAGEMENT, canExport: false },
    PRODUCTS: { ...FULL_ACCESS, canDelete: false },
    IMPORTS: FULL_ACCESS,
    STOCK: { canView: true, canCreate: true, canEdit: false, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: true },
    QUOTATIONS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: true },
    SALES: DEFAULT_NO_ACCESS,
    PROJECTS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: false, canViewCosts: false },
    PAYMENTS: { canView: true, canCreate: true, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: true, canViewCosts: true },
    EXPENSES: { canView: true, canCreate: true, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: true, canViewCosts: true },
    REPORTS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: true },
    SETTINGS: DEFAULT_NO_ACCESS
  },
  SALES_OFFICER: {
    DASHBOARD: { ...READ_ONLY_MANAGEMENT, canViewCosts: false },
    PRODUCTS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: false },
    IMPORTS: DEFAULT_NO_ACCESS,
    STOCK: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: false },
    QUOTATIONS: { canView: true, canCreate: true, canEdit: true, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: false },
    SALES: { canView: true, canCreate: true, canEdit: true, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: false },
    PROJECTS: { canView: true, canCreate: true, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: true, canViewCosts: false },
    PAYMENTS: { canView: true, canCreate: true, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: true, canViewCosts: false },
    EXPENSES: DEFAULT_NO_ACCESS,
    REPORTS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: false },
    SETTINGS: DEFAULT_NO_ACCESS
  },
  STOREKEEPER: {
    DASHBOARD: { ...READ_ONLY_MANAGEMENT, canViewCosts: false },
    PRODUCTS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: false },
    IMPORTS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: true, canViewCosts: false },
    STOCK: { canView: true, canCreate: true, canEdit: true, canDelete: false, canApprove: true, canExport: true, canPrint: true, canViewCosts: false },
    QUOTATIONS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: true, canViewCosts: false },
    SALES: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: true, canViewCosts: false },
    PROJECTS: { canView: true, canCreate: true, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: true, canViewCosts: false },
    PAYMENTS: DEFAULT_NO_ACCESS,
    EXPENSES: DEFAULT_NO_ACCESS,
    REPORTS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: false },
    SETTINGS: DEFAULT_NO_ACCESS
  },
  ACCOUNTS_OFFICER: {
    DASHBOARD: FULL_ACCESS,
    PRODUCTS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: true },
    IMPORTS: { canView: true, canCreate: true, canEdit: true, canDelete: false, canApprove: true, canExport: true, canPrint: true, canViewCosts: true },
    STOCK: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: true },
    QUOTATIONS: { canView: true, canCreate: false, canEdit: true, canDelete: false, canApprove: true, canExport: true, canPrint: true, canViewCosts: true },
    SALES: { canView: true, canCreate: false, canEdit: true, canDelete: false, canApprove: true, canExport: true, canPrint: true, canViewCosts: true },
    PROJECTS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: true, canPrint: true, canViewCosts: true },
    PAYMENTS: FULL_ACCESS,
    EXPENSES: FULL_ACCESS,
    REPORTS: FULL_ACCESS,
    SETTINGS: { canView: true, canCreate: false, canEdit: true, canDelete: false, canApprove: false, canExport: false, canPrint: false, canViewCosts: true }
  },
  TECHNICIAN: {
    DASHBOARD: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: false, canViewCosts: false },
    PRODUCTS: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: false, canViewCosts: false },
    IMPORTS: DEFAULT_NO_ACCESS,
    STOCK: { canView: true, canCreate: false, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: false, canViewCosts: false },
    QUOTATIONS: DEFAULT_NO_ACCESS,
    SALES: DEFAULT_NO_ACCESS,
    PROJECTS: { canView: true, canCreate: true, canEdit: true, canDelete: false, canApprove: false, canExport: false, canPrint: true, canViewCosts: false },
    PAYMENTS: DEFAULT_NO_ACCESS,
    EXPENSES: { canView: true, canCreate: true, canEdit: false, canDelete: false, canApprove: false, canExport: false, canPrint: false, canViewCosts: false },
    REPORTS: DEFAULT_NO_ACCESS,
    SETTINGS: DEFAULT_NO_ACCESS
  },
  MANAGEMENT_VIEWER: {
    DASHBOARD: READ_ONLY_MANAGEMENT,
    PRODUCTS: READ_ONLY_MANAGEMENT,
    IMPORTS: READ_ONLY_MANAGEMENT,
    STOCK: READ_ONLY_MANAGEMENT,
    QUOTATIONS: READ_ONLY_MANAGEMENT,
    SALES: READ_ONLY_MANAGEMENT,
    PROJECTS: READ_ONLY_MANAGEMENT,
    PAYMENTS: READ_ONLY_MANAGEMENT,
    EXPENSES: READ_ONLY_MANAGEMENT,
    REPORTS: READ_ONLY_MANAGEMENT,
    SETTINGS: { ...READ_ONLY_MANAGEMENT, canExport: false }
  }
};

export function hasPermission(
  role: UserRole,
  module: SystemModule,
  action: keyof RolePermissions
): boolean {
  const roleMods = ROLE_PERMISSION_MATRIX[role];
  if (!roleMods) return false;
  const modPerms = roleMods[module];
  if (!modPerms) return false;
  return !!modPerms[action];
}
