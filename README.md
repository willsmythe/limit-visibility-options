# Limit repo visibility policy

Policy that limits repos from being public. Non-compliant (public) repos are switched to private visibility.

## To use

To apply this policy:

1. Navigate to your organization's (or enterprise's) `.github` repo

2. Create a folder at the root of this repo named `policies`

3. Create a file in this repo named `limit-visibility-options.yml`

4. Set the contents of this file to:

    ```yaml
    extends: policies/limit-visibility-options

    configuration:
      parameters:
        defaultVisibility: internal   # or private (even though this is the default)
    ```

5. Optionally override the name, description, or enforcement level. For example:

    ```yaml
    extends: policies/limit-visibility-options

    name: My custom name for this policy
    description: My custom description for this policy

    configuration:
      parameters:
        defaultVisibility: internal   # or private (even though this is the default)

    enforcement:
      level: strict
    ```

## Parameters

* `defaultVisibility`: visibility to set non-compliant repos to
  * Required? No
  * Valid values: `private`, `internal`
  * Defaults to: `private`
  