/**
 * Bitbucket API
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SubjectTypesRepositoryEvents } from './subjectTypesRepositoryEvents';

export class RepositoryAllOfLinks {
    'self'?: SubjectTypesRepositoryEvents;
    'html'?: SubjectTypesRepositoryEvents;
    'avatar'?: SubjectTypesRepositoryEvents;
    'pullrequests'?: SubjectTypesRepositoryEvents;
    'commits'?: SubjectTypesRepositoryEvents;
    'forks'?: SubjectTypesRepositoryEvents;
    'watchers'?: SubjectTypesRepositoryEvents;
    'downloads'?: SubjectTypesRepositoryEvents;
    'clone'?: Array<SubjectTypesRepositoryEvents>;
    'hooks'?: SubjectTypesRepositoryEvents;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "SubjectTypesRepositoryEvents"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "SubjectTypesRepositoryEvents"
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "SubjectTypesRepositoryEvents"
        },
        {
            "name": "pullrequests",
            "baseName": "pullrequests",
            "type": "SubjectTypesRepositoryEvents"
        },
        {
            "name": "commits",
            "baseName": "commits",
            "type": "SubjectTypesRepositoryEvents"
        },
        {
            "name": "forks",
            "baseName": "forks",
            "type": "SubjectTypesRepositoryEvents"
        },
        {
            "name": "watchers",
            "baseName": "watchers",
            "type": "SubjectTypesRepositoryEvents"
        },
        {
            "name": "downloads",
            "baseName": "downloads",
            "type": "SubjectTypesRepositoryEvents"
        },
        {
            "name": "clone",
            "baseName": "clone",
            "type": "Array<SubjectTypesRepositoryEvents>"
        },
        {
            "name": "hooks",
            "baseName": "hooks",
            "type": "SubjectTypesRepositoryEvents"
        }    ];

    static getAttributeTypeMap() {
        return RepositoryAllOfLinks.attributeTypeMap;
    }
}

