import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import Avatar from "./Avatar";
import Wrapper from "./Wrapper";

describe("Wrapper", () => {
  it("should render a caption and an image", () => {
    const url = "https://cataas.com/cat/says/hello%20world!";
    const alt = "@github-handle";
    const cap = "a beautiful cat";
    render(
      <Wrapper caption={cap}>
        <Avatar url={url} alt={alt} />
      </Wrapper>
    );
    const img = screen.getByAltText(alt);
    const caption = screen.getByText(cap);
    expect(img).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
  });
});
