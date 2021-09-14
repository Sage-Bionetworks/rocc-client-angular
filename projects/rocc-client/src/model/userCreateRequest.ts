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
 * The information required to create a user account
 */
export interface UserCreateRequest { 
    login: string;
    /**
     * An email address
     */
    email: string;
    password: string;
    name?: string | null;
    avatarUrl?: string | null;
}

