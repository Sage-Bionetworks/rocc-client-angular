/**
 * Registry of Open Community Challenge API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA 
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TagCreateResponse } from './tagCreateResponse';
import { TagCreateRequest } from './tagCreateRequest';


/**
 * A tag that can be assigned to a resource
 */
export interface Tag { 
    /**
     * The ID of the tag
     */
    tagId?: string;
    /**
     * A short description of the tag
     */
    description?: string;
}
