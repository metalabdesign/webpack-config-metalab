
import partial from 'webpack-partial';

import entry from 'webpack-config-entry';
import buildInfo from 'webpack-config-build-info';
import sourceMaps from 'webpack-config-source-maps';
import babel from 'webpack-config-babel';
import json from 'webpack-config-json';
import optimize from 'webpack-config-optimize';
import stats from 'webpack-config-stats';
import root from 'webpack-config-root';
import dev from 'webpack-config-dev-server';
import hot from 'webpack-config-hot';
import sharp from 'webpack-config-sharp';

export default function(config) {
  return partial(
    config,
    entry,
    babel,
    buildInfo,
    json,
    sharp,
    stats,
    root,
    sourceMaps,
    dev,
    hot,
    optimize
  );
}
