import { runtime } from 'webpack-udev-server';

function inject(entries, module) {
  if (typeof entries === 'string') {
    return [ ...module, entries ];
  } else if (Array.isArray(entries)) {
    return module.concat(entries);
  } else if (typeof entries === 'object') {
    const res = { };
    for (const key of Object.keys(entries)) {
      res[key] = inject(entries[key], module);
    }
    return res;
  }
  throw new TypeError();
}

export default function devServer({ entry, target, hot = process.env.HOT }) {
  const env = process.env.NODE_ENV || 'development';

  // Don't use for anything but development.
  if (env !== 'development') {
    return { };
  }

  // Rewrite all the entry points to include HMR code.
  return {
    entry: inject(
      entry,
      runtime({ target, hot })
    ),
  };
}
