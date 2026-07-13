export default {
    // Your existing Rollup configuration
    output: {
      // Other output options
      manualChunks(id) {
        if (id.includes('node_modules')) {
          // Node modules are split into a separate chunk
          return 'vendor';
        }
      }
    }
  };
  