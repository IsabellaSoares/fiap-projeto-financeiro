"use client";

import { ThemeProvider, CssBaseline, GlobalStyles, Box } from "@mui/material";
import theme from "@repo/ui/theme";
import { Header } from "@repo/ui/header";

import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Projeto Finaceiro - Grupo 35</title>

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              ":root": {
                "--primary-color": theme.palette.primary.main,
                "--secondary-color": theme.palette.secondary.main,
                "--background-default-color": theme.palette.background.default,
                "--background-paper-color": theme.palette.background.paper,
              },
            }}
          />
          <Header isLogged />
          <Box
            sx={{
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
