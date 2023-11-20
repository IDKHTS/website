<template>
    <Specs :subNavBar="subNavBar" :dataSrc="sepcs"> </Specs>
</template>
  
  
<script setup lang='ts'>
import Specs from '@@/components/products-sub-page/Specs.vue'
import { storeToRefs } from 'pinia'
import { ISubNavMenu } from '~/components/SubNavBar/type';
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const ray = computed(() => i18n.tm('ray'))
const subNavBar = computed<ISubNavMenu>(() => i18n.tm('secondarynavbarData').laser10w)


const sepcs = {
    sections: [
        {
            title: `Snapmaker 2.0 10W High Power Laser Module`,
            blocks: [
                {
                    header: 'General',
                    blockList: [
                        {
                            title: `Dimensions`,
                            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-laser-10w-module/module-size.png`
                        },
                        {
                            title: `Power`,
                            text: `10 W`
                        },
                        {
                            title: `Laser Type`,
                            text: `450 - 460 nm Semi-conductor`
                        },
                        {
                            title: `Laser Class`,
                            text: `Class 4`
                        },
                        {
                            title: 'Maximum Work Speed',
                            text: "6000 mm/min",
                        },
                        {
                            title: 'Operating Temperature',
                            text: "0℃-35℃",
                        },
                        {
                            title: 'Laser Spot Dimensions',
                            text: "0.05 mm × 0.2 mm",
                        },
                        {
                            title: 'Work Area',
                            text: `
                        320 mm × 350 mm (A350/A350T/F350)<br>
                        230 mm × 250 mm (A250/A250T/F250)
                    `
                        },
                        {
                            title: `Weight`,
                            text: `0.63 kg`
                        },
                        {
                            title: `Frame Material`,
                            text: `Alluminum alloy`
                        },
                        {
                            title: `Data Transmission`,
                            text: `USB, Wi-Fi`
                        },
                        {
                            title: `Supported Materials for Engraving`,
                            text: `Pinewood, plywood, beechwood, walnut, bamboo, MDF, painted metal, SPTE, stainless steel, anodized aluminum, acrylic, dark glass, slate, brick, ceramic, jade, marble, shale, leather, fabric, canvas, corrugated fiberboard, cardboard`
                        },
                        {
                            title: `Supported Materials for Cutting`,
                            text: `pinewood, plywood, beechwood, walnut, bamboo, MDF, black and red acrylic, leather, fabric, canvas, corrugated fiberboard, cardboard`
                        },
                        {
                            title: `Supported Formats`,
                            text: `.stl, .svg, .png, .jpg, .jpeg, .bmp, .dxf`
                        }
                    ]
                },
                {
                    header: '',
                    blockList: [
                        {
                            title: `Laser Safety Goggles`,
                            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-laser-10w-module/goggles.png`
                        },
                        {
                            title: `Wavelength Range
            and Optical Density (OD)`,
                            text: `
                        190-540 nm OD6+<br>
                        800-1700 nm OD4+
                    `
                        },
                        {
                            title: `Visible Light Transmittance`,
                            text: `8.8%`
                        },
                        {
                            title: `Application`,
                            text: `Violet/UV light, green, blue and infrared laser`
                        },
                        {
                            title: `Dimensions`,
                            text: `155 mm × 140 mm × 60 mm`
                        },
                        {
                            title: `Lense Material`,
                            text: `Polycarbonate`
                        }
                    ]
                }
            ],
            notes: `Notice: The specifications listed might be slightly changed in any meaningful way when we refine these products.`
        }
    ]
}
</script>
  
  
<style lang="scss" scoped></style>