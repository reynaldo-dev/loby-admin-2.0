export function makeColorOpaque(colorHex: string, opacity: number): string {
     // Ensure that opacity is within the correct range (0 to 1)
     if (opacity < 0) opacity = 0;
     if (opacity > 1) opacity = 1;

     // Convert the hexadecimal color to RGB
     colorHex = colorHex.replace('#', '');
     const r = parseInt(colorHex.slice(0, 2), 16);
     const g = parseInt(colorHex.slice(2, 4), 16);
     const b = parseInt(colorHex.slice(4, 6), 16);

     // Calculate the color with the applied opacity
     const opaqueColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;

     // Convert the result back to a hexadecimal value
     function componentToHex(c: number): string {
          const hex = c.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
     }
     const matchResult = opaqueColor.match(/\d+/g);
     const rgb = matchResult ? matchResult.map(Number) : [];
     const opaqueColorHex = `#${componentToHex(
          parseInt(rgb[0].toString()) | (1 << 8)
     ).slice(1)}${componentToHex(parseInt(rgb[1].toString()) | (1 << 8)).slice(
          1
     )}${componentToHex(parseInt(rgb[2].toString()) | (1 << 8)).slice(1)}`;

     return opaqueColorHex;
}
