import React from "react";
import type { Pages, Global } from "../.tina/__generated__/types";
import { Cards } from "./blocks/cards";
import { Feature } from "./blocks/feature";
import { Banner } from "./blocks/banner";
import { Embed } from "./blocks/embed";
import { TailwindFeature } from "./blocks/tailwind-feature";
import { TailwindCards } from "./blocks/tailwind-cards";
import { SidebarCards } from "./blocks/sidebar-cards";
import { Support } from "./blocks/support";

export const Blocks = (props: Pages | Global) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PagesBlocksFeature":
              case "GlobalBlocksFeature":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Feature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksBanner":
              case "GlobalBlocksBanner":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Banner data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksPhotoCards":
              case "GlobalBlocksPhotoCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Cards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTextCards":
              case "GlobalBlocksTextCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Cards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksEmbed":
              case "GlobalBlocksEmbed":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Embed data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTailwindFeature":
              case "GlobalBlocksTailwindFeature":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <TailwindFeature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTailwindCards":
              case "GlobalBlocksTailwindCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <TailwindCards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksSidebarCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <SidebarCards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksSupport":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Support data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
