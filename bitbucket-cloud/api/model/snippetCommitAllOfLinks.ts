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

export class SnippetCommitAllOfLinks {
    'self'?: SubjectTypesRepositoryEvents;
    'html'?: SubjectTypesRepositoryEvents;
    'diff'?: SubjectTypesRepositoryEvents;

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
            "name": "diff",
            "baseName": "diff",
            "type": "SubjectTypesRepositoryEvents"
        }    ];

    static getAttributeTypeMap() {
        return SnippetCommitAllOfLinks.attributeTypeMap;
    }
}

