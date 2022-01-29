<script lang="ts" >
    export let width : number;
    export let color : string;

    const height : number = 7 * width / 12;

    const viewBox : string = `0 0 ${width} ${height}`
</script>

<svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4713 0.431328C11.2113 0.171328 10.7893 0.171328 10.5286 0.431328L5.99995 4.95999L1.47128 0.431328C1.21128 0.171328 0.789285 0.171328 0.528618 0.431328C0.268618 0.691328 0.268618 1.11333 0.528618 1.37399L5.52862 6.37399C5.65862 6.50466 5.82862 6.56999 5.99995 6.56999C6.17128 6.56999 6.34128 6.50466 6.47128 6.37466L11.4713 1.37466C11.7313 1.11466 11.7313 0.693328 11.4713 0.432661V0.431328Z" fill={color}/>
</svg>
