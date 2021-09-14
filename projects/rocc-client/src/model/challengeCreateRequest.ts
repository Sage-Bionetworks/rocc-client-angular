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
import { ChallengeStatus } from './challengeStatus';


/**
 * The information used to create a challenge
 */
export interface ChallengeCreateRequest { 
    /**
     * The name of the a challenge
     */
    name: string;
    displayName?: string;
    /**
     * A short description of the challenge
     */
    description: string | null;
    websiteUrl?: string;
    status?: ChallengeStatus;
    startDate?: string | null;
    endDate?: string | null;
    /**
     * The unique identifier of a challenge platform
     */
    platformId?: string;
    doi?: string | null;
}

