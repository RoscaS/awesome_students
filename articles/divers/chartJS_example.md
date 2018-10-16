---
title: ChartJS tricks
date: 2018-10-14
author:  Sol
sidebar: auto
---

## Liens

* [chart.js](http://www.chartjs.org/docs/latest/)
* [vue-chart.js](https://www.npmjs.com/package/vue-chartjs)

## Fonctions usuelles

### Trig



```html
<Charts :x="x" :y="y" :height="200"/>

<script>
export default {
    computed: {
        x() {
            let resolution = 2;
            let periods = 2;

            let _sum = 0;
            let _points = periods * (resolution * 8) + 1;
            let _values = Math.PI / (4 * resolution);
            return [...Array(_points).keys()].map(i => i !== 0 ? ( _sum += _values).toFixed(2) : 0);
        },
        y() {
            return [...this.x].map(i =>  Math.sin(i))
        } 
    }
}
</script>
```
