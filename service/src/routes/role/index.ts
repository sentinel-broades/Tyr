import { Router } from "express";
import { getRolesRouter } from "./GetRoles";
import { insertRoleRouter } from "./InsertRole";

const roleRoutes: Router[] = [getRolesRouter, insertRoleRouter];

export { roleRoutes };
