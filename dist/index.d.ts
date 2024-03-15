import { FlatGitignoreOptions } from 'eslint-config-flat-gitignore';
import { ParserOptions } from '@typescript-eslint/parser';
import { Options } from 'eslint-processor-vue-blocks';
import { Linter } from 'eslint';
import { RuleConfig, MergeIntersection, RenamePrefix, VitestRules, YmlRules, NRules, Prefix, ImportRules, EslintRules, JsoncRules, VueRules, EslintCommentsRules, FlatESLintConfigItem } from '@antfu/eslint-define-config';
import { RuleOptions } from '@eslint-types/typescript-eslint/types';
import { RuleOptions as RuleOptions$1 } from '@eslint-types/unicorn/types';
import { Rules as Rules$1 } from 'eslint-plugin-antfu';

/**
 * Vendor types from Prettier so we don't rely on the dependency.
 */
type VendoredPrettierOptions = Partial<VendoredPrettierOptionsRequired>;
interface VendoredPrettierOptionsRequired {
    /**
     * Specify the line length that the printer will wrap on.
     * @default 120
     */
    printWidth: number;
    /**
     * Specify the number of spaces per indentation-level.
     */
    tabWidth: number;
    /**
     * Indent lines with tabs instead of spaces
     */
    useTabs?: boolean;
    /**
     * Print semicolons at the ends of statements.
     */
    semi: boolean;
    /**
     * Use single quotes instead of double quotes.
     */
    singleQuote: boolean;
    /**
     * Use single quotes in JSX.
     */
    jsxSingleQuote: boolean;
    /**
     * Print trailing commas wherever possible.
     */
    trailingComma: 'none' | 'es5' | 'all';
    /**
     * Print spaces between brackets in object literals.
     */
    bracketSpacing: boolean;
    /**
     * Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being
     * alone on the next line (does not apply to self closing elements).
     */
    bracketSameLine: boolean;
    /**
     * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
     * @deprecated use bracketSameLine instead
     */
    jsxBracketSameLine: boolean;
    /**
     * Format only a segment of a file.
     */
    rangeStart: number;
    /**
     * Format only a segment of a file.
     * @default Number.POSITIVE_INFINITY
     */
    rangeEnd: number;
    /**
     * By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer.
     * In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out.
     * @default "preserve"
     */
    proseWrap: 'always' | 'never' | 'preserve';
    /**
     * Include parentheses around a sole arrow function parameter.
     * @default "always"
     */
    arrowParens: 'avoid' | 'always';
    /**
     * Provide ability to support new languages to prettier.
     */
    plugins: Array<string | any>;
    /**
     * How to handle whitespaces in HTML.
     * @default "css"
     */
    htmlWhitespaceSensitivity: 'css' | 'strict' | 'ignore';
    /**
     * Which end of line characters to apply.
     * @default "lf"
     */
    endOfLine: 'auto' | 'lf' | 'crlf' | 'cr';
    /**
     * Change when properties in objects are quoted.
     * @default "as-needed"
     */
    quoteProps: 'as-needed' | 'consistent' | 'preserve';
    /**
     * Whether or not to indent the code inside <script> and <style> tags in Vue files.
     * @default false
     */
    vueIndentScriptAndStyle: boolean;
    /**
     * Enforce single attribute per line in HTML, Vue and JSX.
     * @default false
     */
    singleAttributePerLine: boolean;
}

type WrapRuleConfig<T extends {
    [key: string]: any;
}> = {
    [K in keyof T]: T[K] extends RuleConfig ? T[K] : RuleConfig<T[K]>;
};
type Awaitable<T> = T | Promise<T>;
type Rules = WrapRuleConfig<MergeIntersection<RenamePrefix<RuleOptions, '@typescript-eslint/', 'ts/'> & RenamePrefix<VitestRules, 'vitest/', 'test/'> & RenamePrefix<YmlRules, 'yml/', 'yaml/'> & RenamePrefix<NRules, 'n/', 'node/'> & Prefix<Rules$1, 'antfu/'> & ImportRules & EslintRules & JsoncRules & VueRules & RuleOptions$1 & EslintCommentsRules & {
    'test/no-only-tests': RuleConfig<[]>;
}>>;
type FlatConfigItem = Omit<FlatESLintConfigItem<Rules, false>, 'plugins'> & {
    /**
     * Custom name of each config item
     */
    name?: string;
    /**
     * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
     *
     * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
     */
    plugins?: Record<string, any>;
};
type UserConfigItem = FlatConfigItem | Linter.FlatConfig;
interface OptionsFiles {
    /**
     * Override the `files` option to provide custom globs.
     */
    files?: string[];
}
interface OptionsVue extends OptionsOverrides {
    /**
     * Create virtual files for Vue SFC blocks to enable linting.
     *
     * @see https://github.com/antfu/eslint-processor-vue-blocks
     * @default true
     */
    sfcBlocks?: boolean | Options;
    /**
     * Vue version. Apply different rules set from `eslint-plugin-vue`.
     *
     * @default 3
     */
    vueVersion?: 2 | 3;
}
type OptionsTypescript = (OptionsTypeScriptWithTypes & OptionsOverrides) | (OptionsTypeScriptParserOptions & OptionsOverrides);
interface OptionsFormatters {
    /**
     * Enable formatting support for CSS, Less, Sass, and SCSS.
     *
     * Currently only support Prettier.
     */
    css?: 'prettier' | boolean;
    /**
     * Enable formatting support for HTML.
     *
     * Currently only support Prettier.
     */
    html?: 'prettier' | boolean;
    /**
     * Enable formatting support for GraphQL.
     */
    graphql?: 'prettier' | boolean;
    /**
     * Custom options for Prettier.
     *
     * By default it's controlled by our own config.
     */
    prettierOptions?: VendoredPrettierOptions;
    /**
     * Custom options for dprint.
     *
     * By default it's controlled by our own config.
     */
    dprintOptions?: boolean;
}
interface OptionsComponentExts {
    /**
     * Additional extensions for components.
     *
     * @example ['vue']
     * @default []
     */
    componentExts?: string[];
}
interface OptionsTypeScriptParserOptions {
    /**
     * Additional parser options for TypeScript.
     */
    parserOptions?: Partial<ParserOptions>;
    /**
     * Glob patterns for files that should be type aware.
     * @default ['**\/*.{ts,tsx}']
     */
    filesTypeAware?: string[];
}
interface OptionsTypeScriptWithTypes {
    /**
     * When this options is provided, type aware rules will be enabled.
     * @see https://typescript-eslint.io/linting/typed-linting/
     */
    tsconfigPath?: string | string[];
}
interface OptionsHasTypeScript {
    typescript?: boolean;
}
interface OptionsOverrides {
    overrides?: FlatConfigItem['rules'];
}
interface OptionsIsInEditor {
    isInEditor?: boolean;
}
interface OptionsUnoCSS extends OptionsOverrides {
    /**
     * Enable attributify support.
     * @default false
     */
    attributify?: boolean;
    /**
     * Enable strict mode by throwing errors about blocklisted classes.
     * @default false
     */
    strict?: boolean;
}
interface OptionsConfig extends OptionsComponentExts {
    /**
     * Enable gitignore support.
     *
     * Passing an object to configure the options.
     *
     * @see https://github.com/antfu/eslint-config-flat-gitignore
     * @default true
     */
    gitignore?: boolean | FlatGitignoreOptions;
    /**
     * Core rules. Can't be disabled.
     */
    javascript?: OptionsOverrides;
    /**
     * Enable TypeScript support.
     *
     * Passing an object to enable TypeScript Language Server support.
     *
     * @default auto-detect based on the dependencies
     */
    typescript?: boolean | OptionsTypescript;
    /**
     * Enable test support.
     *
     * @default true
     */
    test?: boolean | OptionsOverrides;
    /**
     * Enable Vue support.
     *
     * @default auto-detect based on the dependencies
     */
    vue?: boolean | OptionsVue;
    /**
     * Enable JSONC support.
     *
     * @default true
     */
    jsonc?: boolean | OptionsOverrides;
    /**
     * Enable YAML support.
     *
     * @default true
     */
    yaml?: boolean | OptionsOverrides;
    /**
     * Enable unocss rules.
     *
     * Requires installing:
     * - `@unocss/eslint-plugin`
     *
     * @default false
     */
    unocss?: boolean | OptionsUnoCSS;
    /**
     * Use external formatters to format files.
     *
     * Requires installing:
     * - `eslint-plugin-format`
     *
     * When set to `true`, it will enable all formatters.
     *
     * @default false
     */
    formatters?: boolean | OptionsFormatters;
    /**
     * Control to disable some rules in editors.
     * @default auto-detect based on the process.env
     */
    isInEditor?: boolean;
    /**
     * Provide overrides for rules for each integration.
     *
     * @deprecated use `overrides` option in each integration key instead
     */
    overrides?: {
        javascript?: FlatConfigItem['rules'];
        typescript?: FlatConfigItem['rules'];
        test?: FlatConfigItem['rules'];
        vue?: FlatConfigItem['rules'];
        yaml?: FlatConfigItem['rules'];
    };
}

/**
 * Construct an array of ESLint flat config items.
 *
 * @param {OptionsConfig & FlatConfigItem} options
 *  The options for generating the ESLint configurations.
 * @param {Awaitable<UserConfigItem | UserConfigItem[]>[]} userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns {Promise<UserConfigItem[]>}
 *  The merged ESLint configurations.
 */
declare function antfu(options?: OptionsConfig & FlatConfigItem, ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]): Promise<UserConfigItem[]>;
type ResolvedOptions<T> = T extends boolean ? never : NonNullable<T>;
declare function resolveSubOptions<K extends keyof OptionsConfig>(options: OptionsConfig, key: K): ResolvedOptions<OptionsConfig[K]>;
declare function getOverrides<K extends keyof OptionsConfig>(options: OptionsConfig, key: K): any;

declare function comments(): Promise<FlatConfigItem[]>;

declare function ignores(): Promise<FlatConfigItem[]>;

declare function imports(): Promise<FlatConfigItem[]>;

declare function javascript(options?: OptionsIsInEditor & OptionsOverrides): Promise<FlatConfigItem[]>;

declare function node(): Promise<FlatConfigItem[]>;

/**
 * Optional perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
declare function perfectionist(): Promise<FlatConfigItem[]>;

declare function jsonc(options?: OptionsFiles & OptionsOverrides): Promise<FlatConfigItem[]>;

declare function formatters(options?: OptionsFormatters | true): Promise<FlatConfigItem[]>;

/**
 * Sort package.json
 *
 * Requires `jsonc` config
 */
declare function sortPackageJson(): Promise<FlatConfigItem[]>;
/**
 * Sort tsconfig.json
 *
 * Requires `jsonc` config
 */
declare function sortTsconfig(): FlatConfigItem[];

declare function test(options?: OptionsFiles & OptionsIsInEditor & OptionsOverrides): Promise<FlatConfigItem[]>;

declare function typescript(options?: OptionsFiles & OptionsComponentExts & OptionsOverrides & OptionsTypeScriptWithTypes & OptionsTypeScriptParserOptions): Promise<FlatConfigItem[]>;

declare function unicorn(): Promise<FlatConfigItem[]>;

declare function vue(options?: OptionsVue & OptionsHasTypeScript & OptionsOverrides & OptionsFiles): Promise<FlatConfigItem[]>;

declare function yaml(options?: OptionsOverrides & OptionsFiles): Promise<FlatConfigItem[]>;

declare const GLOB_SRC_EXT = "?([cm])[jt]s?(x)";
declare const GLOB_SRC = "**/*.?([cm])[jt]s?(x)";
declare const GLOB_JS = "**/*.?([cm])js";
declare const GLOB_JSX = "**/*.?([cm])jsx";
declare const GLOB_TS = "**/*.?([cm])ts";
declare const GLOB_TSX = "**/*.?([cm])tsx";
declare const GLOB_STYLE = "**/*.{c,le,sc}ss";
declare const GLOB_CSS = "**/*.css";
declare const GLOB_POSTCSS = "**/*.{p,post}css";
declare const GLOB_LESS = "**/*.less";
declare const GLOB_SCSS = "**/*.scss";
declare const GLOB_JSON = "**/*.json";
declare const GLOB_JSON5 = "**/*.json5";
declare const GLOB_JSONC = "**/*.jsonc";
declare const GLOB_MARKDOWN = "**/*.md";
declare const GLOB_MARKDOWN_IN_MARKDOWN = "**/*.md/*.md";
declare const GLOB_SVELTE = "**/*.svelte";
declare const GLOB_VUE = "**/*.vue";
declare const GLOB_YAML = "**/*.y?(a)ml";
declare const GLOB_TOML = "**/*.toml";
declare const GLOB_HTML = "**/*.htm?(l)";
declare const GLOB_ASTRO = "**/*.astro";
declare const GLOB_MARKDOWN_CODE = "**/*.md/**/*.?([cm])[jt]s?(x)";
declare const GLOB_TESTS: string[];
declare const GLOB_ALL_SRC: string[];
declare const GLOB_EXCLUDE: string[];

export { type Awaitable, type FlatConfigItem, GLOB_ALL_SRC, GLOB_ASTRO, GLOB_CSS, GLOB_EXCLUDE, GLOB_HTML, GLOB_JS, GLOB_JSON, GLOB_JSON5, GLOB_JSONC, GLOB_JSX, GLOB_LESS, GLOB_MARKDOWN, GLOB_MARKDOWN_CODE, GLOB_MARKDOWN_IN_MARKDOWN, GLOB_POSTCSS, GLOB_SCSS, GLOB_SRC, GLOB_SRC_EXT, GLOB_STYLE, GLOB_SVELTE, GLOB_TESTS, GLOB_TOML, GLOB_TS, GLOB_TSX, GLOB_VUE, GLOB_YAML, type OptionsComponentExts, type OptionsConfig, type OptionsFiles, type OptionsFormatters, type OptionsHasTypeScript, type OptionsIsInEditor, type OptionsOverrides, type OptionsTypeScriptParserOptions, type OptionsTypeScriptWithTypes, type OptionsTypescript, type OptionsUnoCSS, type OptionsVue, type ResolvedOptions, type Rules, type UserConfigItem, type WrapRuleConfig, antfu, comments, antfu as default, formatters, getOverrides, ignores, imports, javascript, jsonc, node, perfectionist, resolveSubOptions, sortPackageJson, sortTsconfig, test, typescript, unicorn, vue, yaml };
