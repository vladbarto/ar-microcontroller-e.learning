package ro.ps.licentabackend.service.wizard;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import ro.ps.licentabackend.dto.wizard.WizardRequestDTO;
import ro.ps.licentabackend.dto.wizard.WizardResponseDTO;
import ro.ps.licentabackend.dto.wizardPage.WizardPageRequestDTO;
import ro.ps.licentabackend.mapper.WizardMapper;
import ro.ps.licentabackend.model.WizardEntity;
import ro.ps.licentabackend.repository.WizardRepository;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
public class WizardServiceBeanTest {

    private WizardServiceBean serviceUnderTest;

    @Mock private WizardRepository wizardRepositoryMock;
    @Mock private WizardMapper wizardMapperMock;

    private final String applicationName = "TestApp";
    private final UUID WIZARD_ID = UUID.randomUUID();

    @BeforeEach
    void setUp() {
        this.serviceUnderTest = new WizardServiceBean(
                wizardRepositoryMock,
                wizardMapperMock,
                applicationName
        );
    }

    @Test
    void givenWizardDTO_whenSaveWizardWithPages_thenReturnResponseDTO() {
        // ipoteză -- given
        WizardRequestDTO requestDTO = new WizardRequestDTO();
        requestDTO.setSubtitle("Intro to Arduino");
        requestDTO.setAim("Learn basic setup");

        Map<String, WizardPageRequestDTO> pages = new LinkedHashMap<>();
        WizardPageRequestDTO page1 = new WizardPageRequestDTO();
        page1.setAction("CONNECT");
        page1.setTarget("Pin 13");
        page1.setDescription("Introduce LED blink");
        pages.put("1", page1);

        WizardPageRequestDTO page2 = new WizardPageRequestDTO();
        page2.setAction("OPEN");
        page2.setTarget("ATmega328P");
        page2.setDescription("Open microprocessor's menu to visualise internal registers");
        pages.put("2", page2);
        requestDTO.setPages(pages);

        WizardEntity wizardEntity = new WizardEntity();
        wizardEntity.setWizardId(WIZARD_ID);
        wizardEntity.setSubtitle("Intro to Arduino");
        wizardEntity.setAim("Learn basic setup");

        WizardResponseDTO expectedResponse = new WizardResponseDTO();
        expectedResponse.setWizardId(WIZARD_ID);
        expectedResponse.setSubtitle("Intro to Arduino");

        // momentul testării -- when
        when(wizardMapperMock.requestDTOToEntity(any(WizardRequestDTO.class))).thenReturn(wizardEntity);
        when(wizardRepositoryMock.save(any(WizardEntity.class))).thenReturn(wizardEntity);
        when(wizardMapperMock.entityToResponseDTO(any(WizardEntity.class))).thenReturn(expectedResponse);

        WizardResponseDTO response = serviceUnderTest.saveWizardWithPages(requestDTO);

        // verificări sau aserțiuni -- then
        assertThat(response).isEqualTo(expectedResponse);
    }
}