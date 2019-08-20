let core = require('@policies/core');

let resources = core.getResources(); // array of non-compliant resources

resources.forEach(repo => {
    let isEnterpriseOrg = repo.owner.enterprise;
    
    // set visibility to "internal" for repos in Enterprise orgs, otherwise set to "private"
    core.setResourceProperty(repo, { 
        visibility: isEnterpriseOrg ? 'internal' : 'private' 
    });
});

return core.remediation.SuccessResult(); // or something like this
