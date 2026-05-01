import {
  Anchor,
  Button,
  Container,
  Group,
  Modal,
  Popover,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useMemo, useState } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import resumePdf from "../assets/resume.pdf";
import menace_logo from "../assets/menace_logo.png";
import cot from "../assets/cot.png";
import medium from "../assets/medium.png";
import percept_logo from "../assets/percept_logo.png";
import aws from "../assets/aws.png";
import aws_dev from "../assets/aws_dev.png";
import azure_az900 from "../assets/azure_az900.svg";
import aws_community_builder from "../assets/aws_community_builder.png";
import applivity from "../assets/applivity.png";
import { ViewCounter } from "./ViewCounter";

type WorkItem = {
  title: string;
  href: string;
  logo?: string;
};

const works: WorkItem[] = [
  {
    title: "The RAG Architecture Blueprint",
    href: "https://0xahmedkhan.medium.com/the-rag-architecture-blueprint-how-to-build-an-expert-llm-and-give-it-a-perfect-memory-e74f003fdfb9",
    logo: medium,
  },
  {
    title: "Azure to AWS Cross-Cloud Authentication: The Complete Guide",
    href: "https://0xahmedkhan.medium.com/azure-to-aws-cross-cloud-authentication-the-complete-guide-875037f6a0ae",
    logo: medium,
  },
  {
    title: "Matchbox AI (Reinforcement Learning visualization)",
    href: "https://0xahmedk.github.io/matchbox-ai",
    logo: menace_logo,
  },
  {
    title: "Percept Labs (Perceptron mechanics)",
    href: "https://0xahmedk.github.io/percept",
    logo: percept_logo,
  },
  {
    title:
      "Explainer: Causal Sufficiency and Necessity improves chain-of-thought reasoning in LLMs",
    href: "https://0xahmedk.github.io/cot",
    logo: cot,
  },
  {
    title: "Git-from-Scratch (Systems engineering in Go)",
    href: "https://github.com/0xahmedk/jit",
  },
  {
    title: "React-Nested-State (NPM Package)",
    href: "https://www.npmjs.com/package/react-nested-state",
  },
];

type CertificationItem = {
  title: string;
  href: string;
  badge?: string;
};

const certifications: CertificationItem[] = [
  {
    title: "AWS Certified Developer (Associate)",
    href: "https://www.credly.com/badges/8e7f1170-d631-4f3a-9014-e07cfbe4dee0/public_url",
    badge: aws_dev,
  },
  {
    title: "AWS Cloud Practitioner",
    href: "https://www.credly.com/badges/02a2dac9-0556-437e-90a7-cfd7c79ae4fc/public_url",
    badge: aws,
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/0xahmed/2D40B219038C0B81?sharingId=69DFB5E94A643564",
    badge: azure_az900,
  },
];

function WorkRow({ title, href, logo }: WorkItem) {
  const domain = new URL(href).hostname;
  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;

  return (
    <UnstyledButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="works-row"
      aria-label={title}
    >
      {logo ? (
        <img src={logo} alt={`${title} logo`} width={16} height={16} />
      ) : (
        <img
          src={faviconUrl}
          alt={`${domain} favicon`}
          width={16}
          height={16}
        />
      )}
      <Text fz="sm" fw={500} className="works-title">
        {title}
      </Text>
      <IconArrowUpRight size={16} className="works-arrow" />
    </UnstyledButton>
  );
}

export default function Layout() {
  const [analyticsOpened, setAnalyticsOpened] = useState(false);
  const [passcodeOpened, setPasscodeOpened] = useState(false);
  const [passcodeInput, setPasscodeInput] = useState("");
  const [passcodeError, setPasscodeError] = useState("");

  const mapImageBase =
    "https://mapmyvisitors.com/map.png?cl=ffffff&t=n&d=oeuvPQc_kDLZmTAS0rXmGAF3D7wed012tx9QkJMKVRk&co=2d78ad&ct=ffffff";
  const mapImageUrl1x = `${mapImageBase}&w=1200`;
  const mapImageUrl2x = `${mapImageBase}&w=2400`;

  const expectedPasscode = useMemo(() => {
    const codes = [97, 117, 114, 111, 114, 97];
    return String.fromCharCode(...codes);
  }, []);

  const handlePasscodeSubmit = () => {
    const normalized = passcodeInput.trim().toLowerCase();
    if (normalized === expectedPasscode) {
      setPasscodeError("");
      setPasscodeOpened(false);
      setAnalyticsOpened(true);
      setPasscodeInput("");
      return;
    }

    setPasscodeError("Nope. Try the secret word.");
  };

  return (
    <Container
      size={800}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <Stack
        align="center"
        gap={24}
        style={{
          width: "100%",
          maxWidth: 800,
        }}
      >
        <Title
          order={1}
          fw={800}
          style={{
            fontSize: "clamp(2.4rem, 8vw, 3rem)",
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          Ahmed Khan
        </Title>

        <Group justify="center" gap="md">
          <Anchor
            href="https://github.com/0xahmedk"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </Anchor>

          <Anchor
            href="https://www.linkedin.com/in/0xahmedkhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </Anchor>

          <Anchor
            href="https://0xahmedkhan.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon"
            aria-label="Medium"
          >
            <FaMedium size={22} />
          </Anchor>

          <Anchor
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon"
            aria-label="Resume"
          >
            <FiFileText size={22} />
          </Anchor>
        </Group>

        <Text c="dimmed" lh={1.6} fz="lg" ta="center" maw={640}>
          <Text fw={700} display={"inline"}>
            AI-Native Software Engineer
          </Text>{" "}
          with over 4 years of expertise in architecting high-stakes cloud
          ecosystems and intelligent backends. Driven by a first-principles
          engineering philosophy, I specialize in bridging the gap between
          complex AI research and production-grade software, ranging from
          RAG-based LLM orchestration to high-concurrency FinTech engines.
        </Text>
        <Text c="dimmed" lh={1.6} fz="lg" ta="center" maw={640}>
          I am deeply interested in the synergy between autonomous systems and
          cloud security, frequently contributing to the ecosystem through
          technical writing and open-source systems research. A proactive
          problem-solver and multi-cloud expert (AWS/Azure), dedicated to
          engineering scalable, secure, and distributed infrastructures that
          define the next generation of intelligent software.
        </Text>

        <Title
          order={3}
          fw={700}
          style={{ width: "100%", textAlign: "center" }}
        >
          Notable Work · Readings · Publications
        </Title>

        <Stack gap={6} w="100%" mt={14}>
          {works.map((work) => (
            <WorkRow
              key={work.title}
              title={work.title}
              href={work.href}
              logo={work.logo}
            />
          ))}
        </Stack>

        <Title
          order={3}
          fw={700}
          style={{ width: "100%", textAlign: "center" }}
        >
          Certifications
        </Title>

        <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="sm" w="100%" mt={8}>
          {certifications.map((certification) => (
            <Anchor
              key={certification.title}
              href={certification.href}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-badge"
              aria-label={certification.title}
            >
              {certification.badge ? (
                <img
                  src={certification.badge}
                  alt={certification.title}
                  style={{ display: "block", margin: "0 auto", maxWidth: 160 }}
                />
              ) : (
                <Text fz="xs" fw={600} ta="center" lh={1.25}>
                  {certification.title}
                </Text>
              )}
            </Anchor>
          ))}
        </SimpleGrid>

        <Title
          order={3}
          fw={700}
          style={{ width: "100%", textAlign: "center" }}
        >
          Community
        </Title>

        <div className="community-builder">
          <Popover position="bottom" withArrow shadow="md">
            <Popover.Target>
              <div
                className="certification-badge community-builder-badge community-builder-trigger"
                aria-label="AWS Community Builder details"
              >
                <img
                  src={aws_community_builder}
                  alt="AWS Community Builder"
                  className="community-builder-image"
                />
              </div>
            </Popover.Target>
            <Popover.Dropdown className="community-builder-popover">
              <Text fz="xs" c="dimmed">
                AWS Community Builders are AWS enthusiasts and emerging thought
                leaders who share content, mentor builders, and support the
                broader cloud community.
              </Text>
              <Text fz="xs" c="dimmed" mt={6}>
                We grow together through knowledge sharing and AWS-supported
                webinars, panels, and resources. Applications open once a year;
                reach out if you are interested.
              </Text>
            </Popover.Dropdown>
          </Popover>
        </div>

        <Title
          order={3}
          fw={700}
          style={{ width: "100%", textAlign: "center" }}
        >
          Experience
        </Title>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-header">
                <img
                  src={applivity}
                  alt="Applivity logo"
                  className="timeline-logo"
                />
                <Text fw={600} className="timeline-title">
                  Software Engineer · Applivity
                </Text>
              </div>
              <Text fz="xs" className="timeline-meta">
                Islamabad, Pakistan · February 2022 – Present
              </Text>
            </div>
          </div>
        </div>

        <Title
          order={3}
          fw={700}
          style={{ width: "100%", textAlign: "center" }}
        >
          Education
        </Title>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-header">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/e/e4/National_University_of_Computer_and_Emerging_Sciences_logo.png"
                  alt="FAST logo"
                  className="timeline-logo"
                />
                <Text fw={600} className="timeline-title">
                  National University of Computer and Emerging Sciences (FAST)
                </Text>
              </div>
              <Text fz="sm" className="timeline-detail">
                Master of Science in Artificial Intelligence
              </Text>
              <Text fz="xs" className="timeline-meta">
                Islamabad, Pakistan · 2025 – 2027 (Expected)
              </Text>
              <Text fz="xs" className="timeline-detail">
                Research: Developing LSTM+GRU & RL based models for detection
                and mitigation of cache-based side-channel attacks in cloud
                environments.
              </Text>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-header">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/1/1e/International_Islamic_University%2C_Islamabad_%28crest%29.png"
                  alt="International Islamic University Islamabad crest"
                  className="timeline-logo"
                />
                <Text fw={600} className="timeline-title">
                  International Islamic University Islamabad
                </Text>
              </div>
              <Text fz="sm" className="timeline-detail">
                Bachelor of Science in Computer Science
              </Text>
              <Text fz="xs" className="timeline-meta">
                Islamabad, Pakistan · 2018 – 2022
              </Text>
              <Text fz="xs" className="timeline-detail">
                CGPA: 3.54 / 4.00
              </Text>
            </div>
          </div>
        </div>

        <Stack w="100%" gap={4} mt={18} className="terminal-footer">
          {/* <Text fz="sm" className="terminal-status-line">
            guest@me:~$ status --current-focus
          </Text>
          <Text fz="sm" className="terminal-focus-line">
            Researching LSTM+GRU & RL based models for cache-based side-channel
            attack detection.
          </Text> */}
          <div className="terminal-views-line">
            <ViewCounter />
          </div>
          <Button
            variant="transparent"
            size="xs"
            style={{
              fontSize: 8,
            }}
            onClick={() => setPasscodeOpened(true)}
          >
            View detailed analytics
          </Button>
        </Stack>

        <Modal
          opened={passcodeOpened}
          onClose={() => setPasscodeOpened(false)}
          title="Access vault"
          centered
        >
          <Text fz="sm" c="dimmed" mb="sm">
            Speak the secret word to unlock the analytics map. Because it is
            just for Ahmed, 😉
          </Text>
          <TextInput
            label="Passcode"
            placeholder="Enter secret word"
            value={passcodeInput}
            error={passcodeError}
            onChange={(event) => {
              setPasscodeInput(event.currentTarget.value);
              if (passcodeError) {
                setPasscodeError("");
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handlePasscodeSubmit();
              }
            }}
            autoFocus
          />
          <Group justify="flex-end" mt="md">
            <Button variant="light" onClick={() => setPasscodeOpened(false)}>
              Cancel
            </Button>
            <Button onClick={handlePasscodeSubmit}>Unlock</Button>
          </Group>
        </Modal>

        <Modal
          opened={analyticsOpened}
          onClose={() => setAnalyticsOpened(false)}
          title="Visitor analytics"
          centered
          fullScreen
        >
          <Anchor
            href="https://mapmyvisitors.com/web/1c48e"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit tracker"
          >
            <img
              src={mapImageUrl1x}
              srcSet={`${mapImageUrl1x} 1x, ${mapImageUrl2x} 2x`}
              alt="Visitor map"
              style={{ width: "100%", borderRadius: 12 }}
              loading="lazy"
            />
          </Anchor>
        </Modal>
      </Stack>
    </Container>
  );
}
