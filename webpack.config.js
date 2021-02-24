module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                syntax: "postcss-scss",
                plugins: ["postcss-import", "tailwindcss", "autoprefixer"],
              },
            },
          },
        ],
      },
    ],
  },
};
