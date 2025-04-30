import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  Event,
  EventDetails,
  Item,
  ItemDetails,
  ItemVariation,
  ItemVariationDetails,
  Order,
  Question,
  QuestionDetails,
  Voucher,
  VoucherDetails,
  Quota,
  QuotaDetails,
  SeatingPlan,
  SeatingPlanDetails,
  Discount,
  DiscountDetails,
  SalesChannel,
  SalesChannelDetails,
  WaitingListEntry,
  WaitingListEntryDetails,
  CheckInList,
  CheckInListDetails,
  MembershipType,
  MembershipTypeDetails,
  Membership,
  MembershipDetails,
  Media,
  MediaDetails,
  Cart,
  CartDetails,
  Team,
  Badge,
  BadgeDetails,
  BankTransfer,
  BankTransferDetails,
  DataExport,
  DataExportDetails,
  DataExporter,
  PDFExport,
  PDFExportDetails,
  ScheduledExport,
  ScheduledExportDetails,
  Shredder,
  ShredderDetails,
  TeamDetails,
  
} from './types';

export class PretixApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, apiToken?: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        Authorization: apiToken ? `Token ${apiToken}` : '',
        'Content-Type': 'application/json',
      },
    });
  }

  // Generic HTTP methods
  private async get<T>(url: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url);
  }

  private async post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data);
  }

  private async patch<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance.patch<T>(url, data);
  }

  private async delete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url);
  }

  // Event Endpoints
  public async getEvents(organizer: string): Promise<Event[]> {
    const response = await this.get<Event[]>(`/api/v1/organizers/${organizer}/events/`);
    return response.data;
  }

  public async createEvent(organizer: string, eventData: EventDetails): Promise<Event> {
    const response = await this.post<Event>(`/api/v1/organizers/${organizer}/events/`, eventData);
    return response.data;
  }

  public async updateEvent(organizer: string, slug: string, eventData: EventDetails): Promise<Event> {
    const response = await this.patch<Event>(`/api/v1/organizers/${organizer}/events/${slug}/`, eventData);
    return response.data;
  }

  public async deleteEvent(organizer: string, slug: string): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${slug}/`);
  }

  // Item Endpoints (Artikel)
  public async getItems(organizer: string, event: string): Promise<Item[]> {
    const response = await this.get<Item[]>(`/api/v1/organizers/${organizer}/events/${event}/items/`);
    return response.data;
  }

  public async createItem(organizer: string, event: string, itemData: ItemDetails): Promise<Item> {
    const response = await this.post<Item>(`/api/v1/organizers/${organizer}/events/${event}/items/`, itemData);
    return response.data;
  }

  public async updateItem(organizer: string, event: string, itemId: number, itemData: Partial<ItemDetails>): Promise<Item> {
    const response = await this.patch<Item>(`/api/v1/organizers/${organizer}/events/${event}/items/${itemId}/`, itemData);
    return response.data;
  }

  public async deleteItem(organizer: string, event: string, itemId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/items/${itemId}/`);
  }

  // Item Variation Endpoints
  public async getItemVariations(organizer: string, event: string, itemId: number): Promise<ItemVariation[]> {
    const response = await this.get<ItemVariation[]>(`/api/v1/organizers/${organizer}/events/${event}/items/${itemId}/variations/`);
    return response.data;
  }

  public async getItemVariation(organizer: string, event: string, itemId: number, variationId: number): Promise<ItemVariation> {
    const response = await this.get<ItemVariation>(`/api/v1/organizers/${organizer}/events/${event}/items/${itemId}/variations/${variationId}/`);
    return response.data;
  }

  public async createItemVariation(organizer: string, event: string, itemId: number, variationData: ItemVariationDetails): Promise<ItemVariation> {
    const response = await this.post<ItemVariation>(`/api/v1/organizers/${organizer}/events/${event}/items/${itemId}/variations/`, variationData);
    return response.data;
  }

  public async updateItemVariation(organizer: string, event: string, itemId: number, variationId: number, variationData: Partial<ItemVariationDetails>): Promise<ItemVariation> {
    const response = await this.patch<ItemVariation>(`/api/v1/organizers/${organizer}/events/${event}/items/${itemId}/variations/${variationId}/`, variationData);
    return response.data;
  }

  public async deleteItemVariation(organizer: string, event: string, itemId: number, variationId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/items/${itemId}/variations/${variationId}/`);
  }

  // Order Endpoints
  public async getOrders(organizer: string, event: string): Promise<Order[]> {
    const response = await this.get<Order[]>(`/api/v1/organizers/${organizer}/events/${event}/orders/`);
    return response.data;
  }

  public async createOrder(organizer: string, event: string, orderData: Order): Promise<Order> {
    const response = await this.post<Order>(`/api/v1/organizers/${organizer}/events/${event}/orders/`, orderData);
    return response.data;
  }

  public async updateOrder(organizer: string, event: string, orderCode: string, orderData: Partial<Order>): Promise<Order> {
    const response = await this.patch<Order>(`/api/v1/organizers/${organizer}/events/${event}/orders/${orderCode}/`, orderData);
    return response.data;
  }

  public async deleteOrder(organizer: string, event: string, orderCode: string): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/orders/${orderCode}/`);
  }

  // Question Endpoints
  public async getQuestions(organizer: string, event: string): Promise<Question[]> {
    const response = await this.get<Question[]>(`/api/v1/organizers/${organizer}/events/${event}/questions/`);
    return response.data;
  }

  public async createQuestion(organizer: string, event: string, questionData: QuestionDetails): Promise<Question> {
    const response = await this.post<Question>(`/api/v1/organizers/${organizer}/events/${event}/questions/`, questionData);
    return response.data;
  }

  public async updateQuestion(organizer: string, event: string, questionId: number, questionData: QuestionDetails): Promise<Question> {
    const response = await this.patch<Question>(`/api/v1/organizers/${organizer}/events/${event}/questions/${questionId}/`, questionData);
    return response.data;
  }

  public async deleteQuestion(organizer: string, event: string, questionId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/questions/${questionId}/`);
  }

  // Voucher Endpoints
  public async getVouchers(organizer: string, event: string): Promise<Voucher[]> {
    const response = await this.get<Voucher[]>(`/api/v1/organizers/${organizer}/events/${event}/vouchers/`);
    return response.data;
  }

  public async createVoucher(organizer: string, event: string, voucherData: VoucherDetails): Promise<Voucher> {
    const response = await this.post<Voucher>(`/api/v1/organizers/${organizer}/events/${event}/vouchers/`, voucherData);
    return response.data;
  }

  public async updateVoucher(organizer: string, event: string, code: string, voucherData: Partial<VoucherDetails>): Promise<Voucher> {
    const response = await this.patch<Voucher>(`/api/v1/organizers/${organizer}/events/${event}/vouchers/${code}/`, voucherData);
    return response.data;
  }

  public async deleteVoucher(organizer: string, event: string, code: string): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/vouchers/${code}/`);
  }

  // Quota Endpoints
  public async getQuotas(organizer: string, event: string): Promise<Quota[]> {
    const response = await this.get<Quota[]>(`/api/v1/organizers/${organizer}/events/${event}/quotas/`);
    return response.data;
  }

  public async createQuota(organizer: string, event: string, quotaData: QuotaDetails): Promise<Quota> {
    const response = await this.post<Quota>(`/api/v1/organizers/${organizer}/events/${event}/quotas/`, quotaData);
    return response.data;
  }

  public async updateQuota(organizer: string, event: string, quotaId: number, quotaData: Partial<QuotaDetails>): Promise<Quota> {
    const response = await this.patch<Quota>(`/api/v1/organizers/${organizer}/events/${event}/quotas/${quotaId}/`, quotaData);
    return response.data;
  }

  public async deleteQuota(organizer: string, event: string, quotaId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/quotas/${quotaId}/`);
  }

  // Seating Plan Endpoints
  public async getSeatingPlans(organizer: string, event: string): Promise<SeatingPlan[]> {
    const response = await this.get<SeatingPlan[]>(`/api/v1/organizers/${organizer}/events/${event}/seatingplans/`);
    return response.data;
  }

  public async getSeatingPlan(organizer: string, event: string, seatingPlanId: number): Promise<SeatingPlan> {
    const response = await this.get<SeatingPlan>(`/api/v1/organizers/${organizer}/events/${event}/seatingplans/${seatingPlanId}/`);
    return response.data;
  }

  public async createSeatingPlan(organizer: string, event: string, seatingPlanData: SeatingPlanDetails): Promise<SeatingPlan> {
    const response = await this.post<SeatingPlan>(`/api/v1/organizers/${organizer}/events/${event}/seatingplans/`, seatingPlanData);
    return response.data;
  }

  public async updateSeatingPlan(organizer: string, event: string, seatingPlanId: number, seatingPlanData: Partial<SeatingPlanDetails>): Promise<SeatingPlan> {
    const response = await this.patch<SeatingPlan>(`/api/v1/organizers/${organizer}/events/${event}/seatingplans/${seatingPlanId}/`, seatingPlanData);
    return response.data;
  }

  public async deleteSeatingPlan(organizer: string, event: string, seatingPlanId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/seatingplans/${seatingPlanId}/`);
  }

  // Discount Endpoints
  public async getDiscounts(organizer: string, event: string): Promise<Discount[]> {
    const response = await this.get<Discount[]>(`/api/v1/organizers/${organizer}/events/${event}/discounts/`);
    return response.data;
  }

  public async createDiscount(organizer: string, event: string, discountData: DiscountDetails): Promise<Discount> {
    const response = await this.post<Discount>(`/api/v1/organizers/${organizer}/events/${event}/discounts/`, discountData);
    return response.data;
  }

  public async updateDiscount(organizer: string, event: string, discountId: number, discountData: Partial<DiscountDetails>): Promise<Discount> {
    const response = await this.patch<Discount>(`/api/v1/organizers/${organizer}/events/${event}/discounts/${discountId}/`, discountData);
    return response.data;
  }

  public async deleteDiscount(organizer: string, event: string, discountId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/discounts/${discountId}/`);
  }

  // Sales Channel Endpoints
  public async getSalesChannels(organizer: string): Promise<SalesChannel[]> {
    const response = await this.get<SalesChannel[]>(`/api/v1/organizers/${organizer}/saleschannels/`);
    return response.data;
  }

  public async getSalesChannel(organizer: string, salesChannelId: number): Promise<SalesChannel> {
    const response = await this.get<SalesChannel>(`/api/v1/organizers/${organizer}/saleschannels/${salesChannelId}/`);
    return response.data;
  }

  public async createSalesChannel(organizer: string, salesChannelData: SalesChannelDetails): Promise<SalesChannel> {
    const response = await this.post<SalesChannel>(`/api/v1/organizers/${organizer}/saleschannels/`, salesChannelData);
    return response.data;
  }

  public async updateSalesChannel(organizer: string, salesChannelId: number, salesChannelData: Partial<SalesChannelDetails>): Promise<SalesChannel> {
    const response = await this.patch<SalesChannel>(`/api/v1/organizers/${organizer}/saleschannels/${salesChannelId}/`, salesChannelData);
    return response.data;
  }

  public async deleteSalesChannel(organizer: string, salesChannelId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/saleschannels/${salesChannelId}/`);
  }

  // Waiting List Endpoints
  public async getWaitingListEntries(organizer: string, event: string): Promise<WaitingListEntry[]> {
    const response = await this.get<WaitingListEntry[]>(`/api/v1/organizers/${organizer}/events/${event}/waitinglistentries/`);
    return response.data;
  }

  public async createWaitingListEntry(organizer: string, event: string, entryData: WaitingListEntryDetails): Promise<WaitingListEntry> {
    const response = await this.post<WaitingListEntry>(`/api/v1/organizers/${organizer}/events/${event}/waitinglistentries/`, entryData);
    return response.data;
  }

  public async deleteWaitingListEntry(organizer: string, event: string, entryId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/waitinglistentries/${entryId}/`);
  }

  // Check-In List Endpoints
  public async getCheckInLists(organizer: string, event: string): Promise<CheckInList[]> {
    const response = await this.get<CheckInList[]>(`/api/v1/organizers/${organizer}/events/${event}/checkinlists/`);
    return response.data;
  }

  public async getCheckInList(organizer: string, event: string, checkInListId: number): Promise<CheckInList> {
    const response = await this.get<CheckInList>(`/api/v1/organizers/${organizer}/events/${event}/checkinlists/${checkInListId}/`);
    return response.data;
  }

  public async createCheckInList(organizer: string, event: string, checkInListData: CheckInListDetails): Promise<CheckInList> {
    const response = await this.post<CheckInList>(`/api/v1/organizers/${organizer}/events/${event}/checkinlists/`, checkInListData);
    return response.data;
  }

  public async updateCheckInList(organizer: string, event: string, checkInListId: number, checkInListData: Partial<CheckInListDetails>): Promise<CheckInList> {
    const response = await this.patch<CheckInList>(`/api/v1/organizers/${organizer}/events/${event}/checkinlists/${checkInListId}/`, checkInListData);
    return response.data;
  }

  public async deleteCheckInList(organizer: string, event: string, checkInListId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/checkinlists/${checkInListId}/`);
  }

  // Membership Type Endpoints
  public async getMembershipTypes(organizer: string): Promise<MembershipType[]> {
    const response = await this.get<MembershipType[]>(`/api/v1/organizers/${organizer}/membershiptypes/`);
    return response.data;
  }

  public async getMembershipType(organizer: string, membershipTypeId: number): Promise<MembershipType> {
    const response = await this.get<MembershipType>(`/api/v1/organizers/${organizer}/membershiptypes/${membershipTypeId}/`);
    return response.data;
  }

  public async createMembershipType(organizer: string, membershipTypeData: MembershipTypeDetails): Promise<MembershipType> {
    const response = await this.post<MembershipType>(`/api/v1/organizers/${organizer}/membershiptypes/`, membershipTypeData);
    return response.data;
  }

  public async updateMembershipType(organizer: string, membershipTypeId: number, membershipTypeData: Partial<MembershipTypeDetails>): Promise<MembershipType> {
    const response = await this.patch<MembershipType>(`/api/v1/organizers/${organizer}/membershiptypes/${membershipTypeId}/`, membershipTypeData);
    return response.data;
  }

  public async deleteMembershipType(organizer: string, membershipTypeId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/membershiptypes/${membershipTypeId}/`);
  }

  // Membership Endpoints
  public async getMemberships(organizer: string): Promise<Membership[]> {
    const response = await this.get<Membership[]>(`/api/v1/organizers/${organizer}/memberships/`);
    return response.data;
  }

  public async getMembership(organizer: string, membershipId: number): Promise<Membership> {
    const response = await this.get<Membership>(`/api/v1/organizers/${organizer}/memberships/${membershipId}/`);
    return response.data;
  }

  public async createMembership(organizer: string, membershipData: MembershipDetails): Promise<Membership> {
    const response = await this.post<Membership>(`/api/v1/organizers/${organizer}/memberships/`, membershipData);
    return response.data;
  }

  public async updateMembership(organizer: string, membershipId: number, membershipData: Partial<MembershipDetails>): Promise<Membership> {
    const response = await this.patch<Membership>(`/api/v1/organizers/${organizer}/memberships/${membershipId}/`, membershipData);
    return response.data;
  }

  public async deleteMembership(organizer: string, membershipId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/memberships/${membershipId}/`);
  }

  // Media Endpoints
  public async getMedia(organizer: string, event: string): Promise<Media[]> {
    const response = await this.get<Media[]>(`/api/v1/organizers/${organizer}/events/${event}/media/`);
    return response.data;
  }

  public async uploadMedia(organizer: string, event: string, mediaData: MediaDetails): Promise<Media> {
    const formData = new FormData();
    formData.append('file', mediaData.file);
    formData.append('name', mediaData.name);

    const response = await this.post<Media>(`/api/v1/organizers/${organizer}/events/${event}/media/`, formData);
    return response.data;
  }

  public async deleteMedia(organizer: string, event: string, mediaId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/media/${mediaId}/`);
  }

  // Cart Endpoints
  public async getCart(organizer: string, event: string, cartId: string): Promise<Cart> {
    const response = await this.get<Cart>(`/api/v1/organizers/${organizer}/events/${event}/carts/${cartId}/`);
    return response.data;
  }

  public async createCart(organizer: string, event: string, cartData: CartDetails): Promise<Cart> {
    const response = await this.post<Cart>(`/api/v1/organizers/${organizer}/events/${event}/carts/`, cartData);
    return response.data;
  }

  public async updateCart(organizer: string, event: string, cartId: string, cartData: CartDetails): Promise<Cart> {
    const response = await this.patch<Cart>(`/api/v1/organizers/${organizer}/events/${event}/carts/${cartId}/`, cartData);
    return response.data;
  }

  public async deleteCart(organizer: string, event: string, cartId: string): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/carts/${cartId}/`);
  }

  // Team Endpoints
  public async getTeams(organizer: string): Promise<Team[]> {
    const response = await this.get<Team[]>(`/api/v1/organizers/${organizer}/teams/`);
    return response.data;
  }

  public async getTeam(organizer: string, teamId: number): Promise<Team> {
    const response = await this.get<Team>(`/api/v1/organizers/${organizer}/teams/${teamId}/`);
    return response.data;
  }

  public async createTeam(organizer: string, teamData: TeamDetails): Promise<Team> {
    const response = await this.post<Team>(`/api/v1/organizers/${organizer}/teams/`, teamData);
    return response.data;
  }

  public async updateTeam(organizer: string, teamId: number, teamData: Partial<TeamDetails>): Promise<Team> {
    const response = await this.patch<Team>(`/api/v1/organizers/${organizer}/teams/${teamId}/`, teamData);
    return response.data;
  }

  public async deleteTeam(organizer: string, teamId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/teams/${teamId}/`);
  }

  // Data Exporter Endpoints
  public async getDataExporters(organizer: string, event: string): Promise<DataExporter[]> {
    const response = await this.get<DataExporter[]>(`/api/v1/organizers/${organizer}/events/${event}/exporters/`);
    return response.data;
  }

  public async createDataExport(organizer: string, event: string, exportData: DataExportDetails): Promise<DataExport> {
    const response = await this.post<DataExport>(`/api/v1/organizers/${organizer}/events/${event}/exports/`, exportData);
    return response.data;
  }

  public async getDataExport(organizer: string, event: string, exportId: number): Promise<DataExport> {
    const response = await this.get<DataExport>(`/api/v1/organizers/${organizer}/events/${event}/exports/${exportId}/`);
    return response.data;
  }

  // Scheduled Export Endpoints
  public async getScheduledExports(organizer: string, event: string): Promise<ScheduledExport[]> {
    const response = await this.get<ScheduledExport[]>(`/api/v1/organizers/${organizer}/events/${event}/scheduledexports/`);
    return response.data;
  }

  public async createScheduledExport(organizer: string, event: string, exportData: ScheduledExportDetails): Promise<ScheduledExport> {
    const response = await this.post<ScheduledExport>(`/api/v1/organizers/${organizer}/events/${event}/scheduledexports/`, exportData);
    return response.data;
  }

  public async updateScheduledExport(organizer: string, event: string, exportId: number, exportData: Partial<ScheduledExportDetails>): Promise<ScheduledExport> {
    const response = await this.patch<ScheduledExport>(`/api/v1/organizers/${organizer}/events/${event}/scheduledexports/${exportId}/`, exportData);
    return response.data;
  }

  public async deleteScheduledExport(organizer: string, event: string, exportId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/scheduledexports/${exportId}/`);
  }

  // Shredder Endpoints
  public async getShredders(organizer: string, event: string): Promise<Shredder[]> {
    const response = await this.get<Shredder[]>(`/api/v1/organizers/${organizer}/events/${event}/shredders/`);
    return response.data;
  }

  public async executeShredder(organizer: string, event: string, shredderData: ShredderDetails): Promise<void> {
    await this.post<void>(`/api/v1/organizers/${organizer}/events/${event}/shredders/`, shredderData);
  }

  // Bank Transfer Endpoints
  public async getBankTransfers(organizer: string, event: string): Promise<BankTransfer[]> {
    const response = await this.get<BankTransfer[]>(`/api/v1/organizers/${organizer}/events/${event}/banktransfers/`);
    return response.data;
  }

  public async createBankTransfer(organizer: string, event: string, transferData: BankTransferDetails): Promise<BankTransfer> {
    const response = await this.post<BankTransfer>(`/api/v1/organizers/${organizer}/events/${event}/banktransfers/`, transferData);
    return response.data;
  }

  public async updateBankTransfer(organizer: string, event: string, transferId: number, transferData: Partial<BankTransferDetails>): Promise<BankTransfer> {
    const response = await this.patch<BankTransfer>(`/api/v1/organizers/${organizer}/events/${event}/banktransfers/${transferId}/`, transferData);
    return response.data;
  }

  public async deleteBankTransfer(organizer: string, event: string, transferId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/banktransfers/${transferId}/`);
  }

  // PDF Export Endpoints
  public async getPDFExports(organizer: string, event: string): Promise<PDFExport[]> {
    const response = await this.get<PDFExport[]>(`/api/v1/organizers/${organizer}/events/${event}/pdfexports/`);
    return response.data;
  }

  public async createPDFExport(organizer: string, event: string, exportData: PDFExportDetails): Promise<PDFExport> {
    const response = await this.post<PDFExport>(`/api/v1/organizers/${organizer}/events/${event}/pdfexports/`, exportData);
    return response.data;
  }

  public async getPDFExport(organizer: string, event: string, exportId: number): Promise<PDFExport> {
    const response = await this.get<PDFExport>(`/api/v1/organizers/${organizer}/events/${event}/pdfexports/${exportId}/`);
    return response.data;
  }

  // Badge Endpoints
  public async getBadges(organizer: string, event: string): Promise<Badge[]> {
    const response = await this.get<Badge[]>(`/api/v1/organizers/${organizer}/events/${event}/badges/`);
    return response.data;
  }

  public async createBadge(organizer: string, event: string, badgeData: BadgeDetails): Promise<Badge> {
    const response = await this.post<Badge>(`/api/v1/organizers/${organizer}/events/${event}/badges/`, badgeData);
    return response.data;
  }

  public async updateBadge(organizer: string, event: string, badgeId: number, badgeData: Partial<BadgeDetails>): Promise<Badge> {
    const response = await this.patch<Badge>(`/api/v1/organizers/${organizer}/events/${event}/badges/${badgeId}/`, badgeData);
    return response.data;
  }

  public async deleteBadge(organizer: string, event: string, badgeId: number): Promise<void> {
    await this.delete<void>(`/api/v1/organizers/${organizer}/events/${event}/badges/${badgeId}/`);
  }
}

export default PretixApiClient;