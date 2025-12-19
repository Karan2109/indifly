import "./globals.css";
import MainApp from "../app/MainApp"

export const metadata = {
  title: "Indifly Ventures - Building Ventures, Building Nation | Digital Inclusion in Bharat",
  description: "Indifly Ventures is a Pune-based venture builder dedicated to driving digital inclusion in Bharat. We co-create and scale technology-driven businesses across fintech, e-commerce, education, and media.",
  keywords: "venture builder, digital inclusion, Bharat, fintech, e-commerce, Indifly Ventures, Pune",
  openGraph: {
    title: "Indifly Ventures - Building Ventures, Building Nation",
    description: "Co-creating alongside founders in their journey from idea to industry and beyond.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <MainApp>
          {children}
        </MainApp>        
      </body>
    </html>
  );
}
