const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== 'production',
});

module.exports = withPWA({
  output: 'standalone',
  trailingSlash: false,
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  turbopack: {},
  staticPageGenerationTimeout: 60,

  async redirects() {
    return [
      {
        source: '/search-by-make/:make/:model/:year(\\d{4})',
        destination: '/search-by-make/:make/:model',
        permanent: true,
      },
      {
        source: "/search-by-make/Toyota/4Runner/Ignition%20%26%20Electrical/Spark%20Plug-Toyota-4Runner-2002-2009-90919-01235-25",
        destination: "/search-by-make/Toyota/4Runner/Ignition%20%26%20Electrical/Spark%20Plug/Spark%20Plug-Toyota-4Runner-2002-2009-90919-01235-25",
        permanent: true
      },
      {
        source: "/search-by-make/Toyota/RAV4/Ignition%20&%20Electrical/Spark%20Plug-Toyota-RAV4-2001-2003-90919-01210-26",
        destination: "/search-by-make/Toyota/RAV4/Ignition%20&%20Electrical/Spark%20Plug/Spark%20Plug-Toyota-RAV4-2001-2003-90919-01210-26",
        permanent: true
      },
      {
        source: "/search-by-make/Renault/Symbol%202/Ignition%20&%20Electrical/Spark%20Plug-Renault-Symbol%202-2008-2012-7700500168-1",
        destination: "/search-by-make/Renault/Symbol%202/Ignition%20&%20Electrical/Spark%20Plug/Spark%20Plug-Renault-Symbol%202-2008-2012-7700500168-1",
        permanent: true
      },
      {
        source: "/search-by-make/Volkswagen/Touareg/Suspension%20&%20Steering%20Parts/Front%20Lower%20Arm%20Ball%20Joint-Volkswagen-Touareg-2019-2022-4M0407689C-22",
        destination: "/search-by-make/Volkswagen/Touareg/Suspension%20&%20Steering%20Parts/Suspension/Front%20Lower%20Arm%20Ball%20Joint-Volkswagen-Touareg-2019-2022-4M0407689C-22",
        permanent: true
      },
      {
        source: "/search-by-make/Renault/Duster/Wiring%20&%20Harness/Fuse%20Box%20set-Renault-Duster-2010-2015-243800196R-8",
        destination: "/search-by-make/Renault/Duster/Wiring%20&%20Harness/Fuse%20Box/Fuse%20Box%20set-Renault-Duster-2010-2015-243800196R-8",
        permanent: true
      },
      {
        source: "/search-by-make/Volkswagen/Touareg/Suspension%20%26%20Steering%20Parts/Front%20Lower%20Arm%20Ball%20Joint-Volkswagen-Touareg-2019-2022-4M0407689C-22",
        destination: "/search-by-make/Volkswagen/Touareg/Suspension%20%26%20Steering%20Parts/Suspension/Front%20Lower%20Arm%20Ball%20Joint-Volkswagen-Touareg-2019-2022-4M0407689C-22",
        permanent: true
      },
      {
        source: "/search-by-make/Audi/TT%20Quattro/Cooling%20System/Engine%20Water%20Pump%20with%20Gasket%20and%20Temp%20sensor-Audi-TT%20Quattro-2009-2015-06H121026DR-23",
        destination: "/search-by-make/Audi/TT%20Quattro/Cooling%20System/Water%20Pump/Engine%20Water%20Pump%20with%20Gasket%20and%20Temp%20sensor-Audi-TT%20Quattro-2009-2015-06H121026DR-23",
        permanent: true
      },
      {
        source: "/search-by-make/Honda/Pilot/Suspension%20&%20Steering%20Parts/Steering%20Rack",
        destination: "/search-by-make/Honda/Pilot/Suspension%20%26%20Steering%20Parts/Steering%20Rack",
        permanent: true
      },
      {
        source: '/search-by-make/:make/:model/Suspension%20&%20Steering%20Parts/:subcategory*',
        destination: '/search-by-make/:make/:model/Suspension%20%26%20Steering%20Parts/:subcategory*',
        permanent: true,
      },
      {
        source: '/search-by-make/:make/:model/Suspension%20&%20Steering%20Parts/Lower%20Control%20Arm%20(Rear)',
        destination: '/search-by-make/:make/:model/Suspension%20%26%20Steering%20Parts/Lower%20Control%20Arm',
        permanent: true,
      },
      {
        source: '/search-by-make/:make/:model/Suspension%20&%20Steering%20Parts/Lower%20Control%20Arm%20(Front)',
        destination: '/search-by-make/:make/:model/Suspension%20%26%20Steering%20Parts/Lower%20Control%20Arm',
        permanent: true,
      },
      {
        source: '/search-by-make/:make/:model/Suspension%20&%20Steering%20Parts/Upper%20Control%20Arm%20(Rear)',
        destination: '/search-by-make/:make/:model/Suspension%20%26%20Steering%20Parts/Upper%20Control%20Arm',
        permanent: true,
      },
      {
        source: '/search-by-make/:make/:model/Suspension%20&%20Steering%20Parts/Upper%20Control%20Arm%20(Front)',
        destination: '/search-by-make/:make/:model/Suspension%20%26%20Steering%20Parts/Upper%20Control%20Arm',
        permanent: true,
      },
      {
        source: '/search-by-make/:make/:model/Suspension%20&%20Steering%20Parts/Power%20Steering%20Box',
        destination: '/search-by-make/:make/:model/Suspension%20%26%20Steering%20Parts/Steering%20Box',
        permanent: true,
      },
      {
        source: '/search-by-make/:make/:model/Suspension%20&%20Steering%20Parts/Steering%20Box',
        destination: '/search-by-make/:make/:model/Suspension%20%26%20Steering%20Parts/Steering%20Box',
        permanent: true,
      },
      {
        source: '/search-by-make/:make/:model/Electrical%20&%20Electronics/:subcategory*',
        destination: '/search-by-make/:make/:model/Electrical%20%26%20Electronics/:subcategory*',
        permanent: true,
      },
      {
        source: '/search-by-make/:make/:model/Body%20Kits/Bumper%20Cover%20(Front)',
        destination: '/search-by-make/:make/:model/Body%20Kits/Bumpers',
        permanent: true,
      },
      {
        source: '/search-by-make/:make/:model/Transmission%20&%20Drivetrain/Gearbox',
        destination: '/search-by-make/:make/:model/Transmission%20%26%20Drivetrain/Gearbox',
        permanent: true,
      },
      {
        source: '/search-by-make/:make/:model/Transmission%20&%20Drivetrain/Axle%20Assembly',
        destination: '/search-by-make/:make/:model/Transmission%20%26%20Drivetrain/Axle%20Assembly',
        permanent: true,
      },
      {
        source: '/search-by-make/Honda/Accord/Electrical%20&%20Electronics/Alternator%20Assembly-Honda-Accord-2018-31100-5PA-A02-46',
        destination: '/search-by-make/Honda/Accord/Electrical%20%26%20Electronics/Alternator/Alternator%20Assembly-Honda-Accord-2018-31100-5PA-A02-46',
        permanent: true,
      },
    ];
  },
});