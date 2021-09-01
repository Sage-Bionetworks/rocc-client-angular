/**
 * Registry of Open Community Challenge API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA 
 *
 * The version of the OpenAPI document: 0.3.0
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PageOfChallengesAllOf } from './pageOfChallengesAllOf';
import { ResponsePageMetadataPaging } from './responsePageMetadataPaging';
import { ResponsePageMetadata } from './responsePageMetadata';
import { Challenge } from './challenge';


/**
 * A page of Challenges
 */
export interface PageOfChallenges { 
    /**
     * Index of the first result that must be returned
     */
    offset: number;
    /**
     * Maximum number of results returned
     */
    limit: number;
    paging: ResponsePageMetadataPaging;
    /**
     * Total number of results in the result set
     */
    totalResults?: number;
    /**
     * An array of Challenges
     */
    challenges: Array<Challenge>;
}

