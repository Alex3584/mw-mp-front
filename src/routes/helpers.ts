//
// App paths
//

export const pathsPublic: { [k: string]: string } = {
  home: "/",
  productDetails: '/product/:idOrSlug',
};

export const pathsPrivate: { [k: string]: string } = {
  accountSettings: '/account-settings',
};

export const paths: { [k: string]: string } = Object.assign(
  {},
  pathsPublic,
  pathsPrivate
);

//
// Check if pathname mathes to one of given key from paths argument
//

export const checkPathMatch = (
  pathname: string,
  paths: { [k: string]: string }
) => {
  let isMatch = false;

  const allPaths = Object.keys(paths).map((k) => paths[k]); // ['/account-settings', '/favorites']
  const pathFirstSection = pathname.split("/")[1]; // 'account-settings'

  allPaths.forEach((p) => {
    if (p.slice(1) === pathFirstSection) isMatch = true;
  });

  return isMatch;
};
