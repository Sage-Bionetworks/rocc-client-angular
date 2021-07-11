/**
 * Registry of Open Community Challenge API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA 
 *
 * The version of the OpenAPI document: 0.1.7
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ChallengeCreateRequest } from './challengeCreateRequest';
import { ChallengeCreateResponse } from './challengeCreateResponse';
import { ChallengeStatus } from './challengeStatus';


/**
 * A challenge
 */
export interface Challenge { 
    /**
     * The ID of the challenge
     */
    id: string;
    /**
     * The challenge name
     */
    name: string;
    /**
     * A short description of the challenge
     */
    description: string;
    /**
     * The summary of challenge
     */
    summary?: string;
    /**
     * When the challenge started
     */
    startDate?: string;
    /**
     * When the challenge ended
     */
    endDate?: string;
    /**
     * The URL to the challenge website
     */
    url: string;
    status: ChallengeStatus;
    /**
     * The tags associated to the challenge
     */
    tagIds: Array<string>;
    /**
     * The organizers of the challenge
     */
    organizerIds: Array<string>;
    /**
     * The organizations contributing the data
     */
    dataProviderIds: Array<string>;
    /**
     * The grants supporting this challenge
     */
    grantIds: Array<string>;
}

