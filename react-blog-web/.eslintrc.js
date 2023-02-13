module.exports = {
  //   不向父级查找
  root: true,
  //   环境配置
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ["prettier"],
  //   拓展规则
  extends: "airbnb-base",
  //   自定义规则会覆盖掉一部分拓展规则
  // 具体参考eslint官网
  rules: {
    "no-console": "warn",
    semi: "off",
    quotes: ["error", "double"],
    "comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "only-multiline",
      },
    ],
    "eol-last": "off",
    "no-new": "off",
    "arrow-parens": "off",
    "import/no-extraneous-dependencies": "off",
    "comma-danger": "off",
    "no-useless-escape": "off",
    // prettier 提示报错
    "prettier/prettier": "warn",
  },
  //   语言风格
  parserOptions: {
    // 支持import
    sourceType: "module",
  },
};