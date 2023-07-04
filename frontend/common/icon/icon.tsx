import React, { useEffect, useRef, useState } from "react";
const DEFAULT_ASSET_ICON_FOLDER = "../assets/icons";

export function Icon({ name }: { name: string }) {
  const ImportedIconRef = useRef();
  const [, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`${DEFAULT_ASSET_ICON_FOLDER}/${name}.svg`)
        ).ReactComponent;
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  const SvgIcon: any | undefined = ImportedIconRef.current;
  console.log("SVG: ", SvgIcon);
  // return <SvgIcon />;
  if (SvgIcon) {
    // @ts-ignore
    console.log("exist");
    return <SvgIcon />;
  }
  return null;
}
