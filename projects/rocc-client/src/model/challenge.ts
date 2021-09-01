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
import { ChallengeCreateRequest } from './challengeCreateRequest';
import { ChallengeCreateResponse } from './challengeCreateResponse';
import { ChallengeAllOf } from './challengeAllOf';
import { ChallengeStatus } from './challengeStatus';


/**
 * A challenge
 */
export interface Challenge { 
    /**
     * The unique identifier of the challenge
     */
    id: string;
    /**
     * The name of the challenge
     */
    name: string;
    displayName: string;
    /**
     * A short description of the challenge
     */
    description: string | null;
    websiteUrl: string;
    status: ChallengeStatus;
    startDate?: string | null;
    endDate?: string | null;
    /**
     * The unique identifier of a challenge platform
     */
    platformId?: string;
    fullName: string;
    /**
     * The unique identifier of an account
     */
    ownerId: string;
    createdAt: string;
    updatedAt: string;
}

