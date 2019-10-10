/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IssuePickerSuggestionsIssueType } from './issuePickerSuggestionsIssueType';

/**
* A list of issues suggested for use in auto-completion.
*/
export class IssuePickerSuggestions {
    /**
    * A list of issues for an issue type suggested for use in auto-completion.
    */
    'sections'?: Array<IssuePickerSuggestionsIssueType>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sections",
            "baseName": "sections",
            "type": "Array<IssuePickerSuggestionsIssueType>"
        }    ];

    static getAttributeTypeMap() {
        return IssuePickerSuggestions.attributeTypeMap;
    }
}

