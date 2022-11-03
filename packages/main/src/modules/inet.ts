import * as os from 'node:os'

interface LocalNetwork {
  ssid: string;
  address: string;
}

export function getLocalNetworks() {
  const ifaces = os.networkInterfaces();

  const localNetworks: LocalNetwork[] = [];

  Object.keys(ifaces).forEach((ifname) => {
    ifaces[ifname]?.forEach((iface) => {
      if (iface.family !== 'IPv4' || iface.internal !== false) {
        return;
      }

      localNetworks.push({
        ssid: ifname,
        address: iface.address,
      });
    });
  });

  return localNetworks;
}