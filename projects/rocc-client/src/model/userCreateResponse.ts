/**
 * Registry of Open Community Challenge API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA 
 *
 * The version of the OpenAPI document: 0.2.0
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * A user\'s username
 */
export interface UserCreateResponse { 
    /**
     * The username of the user
     */
    username?: string;
    /**
     * The role of the user
     */
    role?: UserCreateResponse.RoleEnum;
}
export namespace UserCreateResponse {
    export type RoleEnum = 'user' | 'admin';
    export const RoleEnum = {
        User: 'user' as RoleEnum,
        Admin: 'admin' as RoleEnum
    };
}


