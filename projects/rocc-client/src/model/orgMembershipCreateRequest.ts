/**
 * Registry of Open Community Challenges API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA 
 *
 * The version of the OpenAPI document: 0.4.0
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The information used to create an org membership
 */
export interface OrgMembershipCreateRequest { 
    /**
     * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
     */
    state: OrgMembershipCreateRequest.StateEnum;
    /**
     * The user\'s membership type in the organization.
     */
    role: OrgMembershipCreateRequest.RoleEnum;
    /**
     * The unique identifier of an organization
     */
    organizationId: string;
    /**
     * The unique identifier of a user
     */
    userId: string;
}
export namespace OrgMembershipCreateRequest {
    export type StateEnum = 'active' | 'pending';
    export const StateEnum = {
        Active: 'active' as StateEnum,
        Pending: 'pending' as StateEnum
    };
    export type RoleEnum = 'admin' | 'member';
    export const RoleEnum = {
        Admin: 'admin' as RoleEnum,
        Member: 'member' as RoleEnum
    };
}


