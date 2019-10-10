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

import { IssuesJqlMetaDataBean } from './issuesJqlMetaDataBean';

/**
* Meta data describing the `issues` context variable.
*/
export class IssuesMetaBean {
    'jql'?: IssuesJqlMetaDataBean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jql",
            "baseName": "jql",
            "type": "IssuesJqlMetaDataBean"
        }    ];

    static getAttributeTypeMap() {
        return IssuesMetaBean.attributeTypeMap;
    }
}

