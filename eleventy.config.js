import {RenderPlugin} from "@11ty/eleventy";
import {I18nPlugin} from "@11ty/eleventy";
import {eleventyImageTransformPlugin} from "@11ty/eleventy-img";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";


export default async function (eleventyConfig) {
    // Configure Eleventy
    eleventyConfig.addPlugin(RenderPlugin);
    eleventyConfig.addPlugin(I18nPlugin);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
};