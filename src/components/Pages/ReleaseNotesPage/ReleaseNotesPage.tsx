import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import PageWrapper from "../../PageWrapper/PageWrapper";
import { Anchor, Typography, Row, Col, Card, Flex } from "antd";

const { Paragraph } = Typography;

// This is a demo component
const ReleaseNotesPage = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper title={t(routePaths.releaseNotes.label)}>
      <Row gutter={[16, 16]}>
        <Col flex="none" span={9}>
          <Anchor
            items={[
              {
                key: "1",
                href: "#version-1-0-0",
                title: "Version 1.0.0",
              },
              {
                key: "2",
                href: "#version-1-1-0",
                title: "Version 1.1.0",
              },
              {
                key: "3",
                href: "#version-2-0-0",
                title: "Version 2.0.0",
              },
              {
                key: "4",
                href: "#version-2-1-0",
                title: "Version 2.1.0",
              },
              {
                key: "5",
                href: "#version-2-2-0",
                title: "Version 2.2.0",
              },
              {
                key: "6",
                href: "#version-3-0-0",
                title: "Version 3.0.0",
              },
              {
                key: "7",
                href: "#version-3-1-0",
                title: "Version 3.1.0",
              },
            ]}
          />
        </Col>

        <Col span={15}>
          <Flex style={{ marginBottom: 50 }} vertical gap={100}>
            <Card id="version-1-0-0" title="Version 1.0.0">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                scelerisque dolor vel nunc dignissim, eget auctor urna ultrices.
              </Paragraph>
            </Card>

            <Card id="version-1-1-0" title="Version 1.1.0">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor ligula at vestibulum aliquet. In tempor ligula in lacus
                dignissim eleifend. Etiam nec ex non elit vestibulum vehicula
                eget id nisi. Nam porta vitae elit eget rutrum. Ut ut nisi id
                nibh lobortis consectetur in at justo. Vestibulum commodo
                tincidunt est, ac placerat lorem gravida sed. Duis sit amet
                lectus a tellus varius tristique. Nulla ac magna urna. Nulla at
                consequat mauris. Integer ut diam velit. Suspendisse eu massa
                sed tortor tempus sollicitudin. In arcu purus, aliquet quis
                vestibulum et, lobortis vitae est. Pellentesque dictum eu eros
                ac consectetur. Etiam quis arcu orci. Mauris pulvinar, justo et
                tempor hendrerit, enim ex faucibus tellus, eget tempor mi neque
                vel ex. Suspendisse potenti. Ut lacinia turpis mollis leo
                eleifend cursus. Suspendisse consectetur sed felis id commodo.
                Sed dignissim elit at neque tincidunt, et dignissim turpis
                elementum. Vestibulum iaculis fermentum elit, a bibendum metus
                eleifend vitae. Nam eget velit eros. Sed vestibulum enim dolor,
                ut tincidunt purus dapibus sed. Aliquam erat volutpat. Curabitur
                non nulla ante. Donec a tellus est. Etiam non elit a augue
                ultrices facilisis. Aliquam sed efficitur mi. Vestibulum sit
                amet augue nec mi efficitur convallis eget eu urna. Sed ut nunc
                leo. Nulla aliquam sed mi eget viverra. Integer scelerisque
                metus sit amet urna pellentesque molestie. Maecenas non orci
              </Paragraph>
            </Card>

            <Card id="version-2-0-0" title="Version 2.0.0">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor ligula at vestibulum aliquet. In tempor ligula in lacus
                dignissim eleifend. Etiam nec ex non elit vestibulum vehicula
                eget id nisi. Nam porta vitae elit eget rutrum. Ut ut nisi id
                nibh lobortis consectetur in at justo. Vestibulum commodo
                tincidunt est, ac placerat lorem gravida sed. Duis sit amet
                lectus a tellus varius tristique.
              </Paragraph>
            </Card>

            <Card id="version-2-1-0" title="Version 2.1.0">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor ligula at vestibulum aliquet. In tempor ligula in lacus
                dignissim eleifend. Etiam nec ex non elit vestibulum vehicula
                eget id nisi. Nam porta vitae elit eget rutrum. Ut ut nisi id
                nibh lobortis consectetur in at justo. Vestibulum commodo
                tincidunt est, ac placerat lorem gravida sed. Duis sit amet
                lectus a tellus varius tristique. Nulla ac magna urna. Nulla at
                consequat mauris. Integer ut diam velit. Suspendisse eu massa
                sed tortor tempus sollicitudin. In arcu purus, aliquet quis
                vestibulum et, lobortis vitae est. Pellentesque dictum eu eros
                ac consectetur. Etiam quis arcu orci. Mauris pulvinar, justo et
                tempor hendrerit, enim ex faucibus tellus, eget tempor mi neque
                vel ex. Suspendisse potenti. Ut lacinia turpis mollis leo
                eleifend cursus. Suspendisse consectetur sed felis id commodo.
                Sed dignissim elit at neque tincidunt, et dignissim turpis
                elementum. Vestibulum iaculis fermentum elit, a bibendum metus
                eleifend vitae. Nam eget velit eros. Sed vestibulum enim dolor,
                ut tincidunt purus dapibus sed. Aliquam erat volutpat.
              </Paragraph>
            </Card>

            <Card id="version-2-2-0" title="Version 2.2.0">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lis
                eget eu urna. Sed ut nunc leo. Nulla aliquam sed mi eget
                viverra. Integer scelerisque metus sit amet urna pellentesque
                molestie. Maecenas non orci pharetra, semper mauris sit amet,
                sagittis augue. Quisque quis lectus vel turpis varius vehicula
                eu eget arcu. Mauris leo enim, bibendum eu velit eu,
                pellentesque sollicitudin lectus. Duis at facilisis est. Nunc eu
                lectus fermentum, congue libero at, tristique orci. Vivamus et
                massa nec elit rutrum efficitur sit amet vitae massa. Aliquam
                accumsan maximus tortor, pharetra ultrices leo ultrices ut.
                Phasellus leo diam, iaculis vel iaculis a, porta eget odio. Nam
                massa purus, commodo sit amet est in, finibus molestie felis.
                Nullam vel lacinia velit, at sodales lorem. Fusce gravida orci
                id porta molestie. Integer dictum vel ex vitae pellentesque.
                Donec ornare ultricies arcu, sed iaculis odio. Nam fermentum
                ultrices pharetra. Donec viverra quam eu sem aliquet, a posuere
                neque accumsan. Aliquam erat volutpat. Sed tincidunt lobortis
                diam, quis consectetur mauris tempus ac. Suspendisse potenti.
                Quisque finibus quam mi, ut tristique ligula tincidunt et. Donec
                in justo venenatis, efficitur velit vel, elementum tellus.
                Praesent justo augue, luctus at dapibus vitae, iaculis mattis
                lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer accumsan at nunc id dictum. Ut mattis felis at elit
                bibendum feugiat. Phasellus luctus rhoncus volutpat. Quisque
                porta a dolor sed placerat. Nulla sagittis aliquam vestibulum.
              </Paragraph>
            </Card>

            <Card id="version-3-0-0" title="Version 3.0.0">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor ligula at vestibulum aliquet. In tempor ligula in lacus
                dignissim eleifend. Etiam nec ex non elit vestibulum vehicula
                eget id nisi. Nam porta vitae elit eget rutrum. Ut ut nisi id
                nibh lobortis consectetur in at justo. Vestibulum commodo
                tincidunt est, ac placerat lorem gravida sed. Duis sit amet
                lectus a tellus varius tristique. Nulla ac magna urna. Nulla at
                consequat mauris. Integer ut diam velit. Suspendisse eu massa
                sed tortor tempus sollicitudin. In arcu purus, aliquet quis
                vestibulum et, lobortis vitae est. Pellentesque dictum eu eros
                ac consectetur. Etiam quis arcu orci. Mauris pulvinar, justo et
                tempor hendrerit, enim ex faucibus tellus, eget tempor mi neque
                vel ex. Suspendisse potenti. Ut lacinia turpis mollis leo
                eleifend cursus. Suspendisse consectetur sed felis id commodo.
                Sed dignissim elit at neque tincidunt, et dignissim turpis
                elementum. Vestibulum iaculis fermentum elit, a bibendum metus
                eleifend vitae. Nam eget velit eros. Sed vestibulum enim dolor,
                ut tincidunt purus dapibus sed. Aliquam erat volutpat.
              </Paragraph>
            </Card>

            <Card id="version-3-1-0" title="Version 3.1.0">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor ligula at vestibulum aliquet. In tempor ligula in lacus
                dignissim eleifend. Etiam nec ex non elit vestibulum vehicula
                eget id nisi. Nam porta vitae elit eget rutrum. Ut ut nisi id
                nibh lobortis consectetur in at justo. Vestibulum commodo
                tincidunt est, ac placerat lorem gravida sed. Duis sit amet
                lectus a tellus varius tristique. Nulla ac magna urna. Nulla at
                consequat mauris. Integer ut diam velit. Suspendisse eu massa
                sed tortor tempus sollicitudin. In arcu purus, aliquet quis
                vestibulum et, lobortis vitae est. Pellentesque dictum eu eros
                ac consectetur. Etiam quis arcu orci. Mauris pulvinar, justo et
                tempor hendrerit, enim ex faucibus tellus, eget tempor mi neque
                vel ex. Suspendisse potenti. Ut lacinia turpis mollis leo
                eleifend cursus. Suspendisse consectetur sed felis id commodo.
                Sed dignissim elit at neque tincidunt, et dignissim turpis
                elementum. Vestibulum iaculis fermentum elit, a bibendum metus
                eleifend vitae. Nam eget velit eros. Sed vestibulum enim dolor,
                ut tincidunt purus dapibus sed. Aliquam erat volutpat. Curabitur
                non nulla ante. Donec a tellus est. Etiam non elit a augue
                ultrices facilisis. Aliquam sed efficitur mi. Vestibulum sit
                amet augue nec mi efficitur convallis eget eu urna. Sed ut nunc
                leo. Nulla aliquam sed mi eget viverra. Integer scelerisque
                metus sit amet urna pellentesque molestie. Maecenas non orci
                pharetra, semper mauris sit amet, sagittis augue. Quisque quis
                lectus vel turpis varius vehicula eu eget arcu. Mauris leo enim,
                bibendum eu velit eu, pellentesque sollicitudin lectus. Duis at
                facilisis est. Nunc eu lectus fermentum, congue libero at,
                tristique orci. Vivamus et massa nec elit rutrum efficitur sit
                amet vitae massa. Aliquam accumsan maximus tortor, pharetra
                ultrices leo ultrices ut. Phasellus leo diam, iaculis vel
                iaculis a, porta eget odio. Nam massa purus, commodo sit amet
                est in, finibus molestie felis. Nullam vel lacinia velit, at
                sodales lorem. Fusce gravida orci id porta molestie. Integer
                dictum vel ex vitae pellentesque. Donec ornare ultricies arcu,
                sed iaculis odio. Nam fermentum ultrices pharetra. Donec viverra
                quam eu sem aliquet, a posuere neque accumsan. Aliquam erat
                volutpat. Sed tincidunt lobortis diam, quis consectetur mauris
                tempus ac. Suspendisse potenti. Quisque finibus quam mi, ut
                tristique ligula tincidunt et. Donec in justo venenatis,
                efficitur velit vel, elementum tellus. Praesent justo augue,
                luctus at dapibus vitae, iaculis mattis lorem. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer accumsan at nunc
                id dictum. Ut mattis felis at elit bibendum feugiat. Phasellus
                luctus rhoncus volutpat. Quisque porta a dolor sed placerat.
                Nulla sagittis aliquam vestibulum.
              </Paragraph>
            </Card>
          </Flex>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default ReleaseNotesPage;
