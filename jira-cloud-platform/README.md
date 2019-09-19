* Note: It was required to remove 2 references to FieldValueClause because of errors generating the `jira-cloud-platform` client. 


`ORIGINAL-jira-cloud-platform-swagger.v3.json:24122`
```json
          {
            "$ref": "#/components/schemas/FieldValueClause"
          },
```

and

`ORIGINAL-jira-cloud-platform-swagger.v3.json:31109`
```json
      "FieldValueClause": {
        "required": [
          "field",
          "operand",
          "operator"
        ],
        "type": "object",
        "properties": {
          "field": {
            "$ref": "#/components/schemas/JqlQueryField"
          },
          "operator": {
            "type": "string",
            "description": "The operator between the field and operand.",
            "enum": [
              "=",
              "!=",
              ">",
              "<",
              ">=",
              "<=",
              "in",
              "not in",
              null,
              "~=",
              "is",
              "is not"
            ]
          },
          "operand": {
            "$ref": "#/components/schemas/JqlQueryClauseOperand"
          }
        },
        "description": "A clause that asserts the current value of a field. For example, `summary ~ test`."
      },
```
